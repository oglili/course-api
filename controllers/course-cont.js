const Course = require('../models/Course')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getCourses = asyncWrapper( async (req,res) => {
    const courses = await Course.find({})
        res
        .status(200)
        .json({ status: 'success', data: { courses, nbHits: courses.length } })
})

const createCourse = asyncWrapper( async (req,res) => {
    const course = await Course.create(req.body)
        res.status(201).json({ course })
})

const getCourse =  asyncWrapper( async (req,res,next) => {
    const {id:courseID} = req.params
    const course = await Course.findOne({_id:courseID});
    if (!course) {
        return next(createCustomError(`No course with id:${courseID}`, 404))
    }
    res.status(200).json({ course })
})

const getAllCourses = asyncWrapper( async (req, res) => {
    const { type, name, university } = req.query;
    const queryObject = {};
    
    if (type) {
        queryObject.type = type;
    }

    if (name) {
        queryObject.name = name;
    }

    if (university) {
        queryObject.university = university;
    }
    
    let result = Course.find(queryObject);
        const courses = await result;
    res.status(200).json({ status: 'success', data: { courses, nbHits: courses.length } });
})

const getCourseParams =  asyncWrapper( async (req,res,next) => {
    const { name, university} = req.params
    const course = await Course.find({ name, university });
    if (!course) {
        return next(createCustomError(`No course with name: ${name} and university ${university}`, 404))
    }
    res.status(200).json({ course })
})


const updateCourse =  asyncWrapper( async (req,res) => {
    const {id:courseID} = req.params
    const course = await Course.findOneAndUpdate({_id:courseID}, req.body, {
        new: true,
        runValidators:true,
    });
    if (!course) {
        return next(createCustomError(`No course with id:${courseID}`, 404))
        }
    res.status(200).json({ course })
})

const deleteCourse = asyncWrapper( async (req,res) => {
    const {id:courseID} = req.params
    const course = await Course.findOneAndDelete({ _id:courseID });
    if (!course) {
        return next(createCustomError(`No course with id:${courseID}`, 404))
    }
    res.status(200).json({ course: null, status: 'success' })
})

module.exports = {
    getCourses,
    createCourse,
    getCourse,
    getAllCourses,
    getCourseParams,
    updateCourse,
    deleteCourse
}
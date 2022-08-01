const {Type, Univ, Course} = require('../models/Course')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const createType = asyncWrapper( async (req,res) => {
    const type = await Type.create(req.body)
        res.status(201).json({ type })
})

const getType = asyncWrapper( async (req,res) => {
    const result = Type.find();
        const type = await result;    
        res
        .status(200)
        .json({ status: 'success', data: { type, nbHits: type.length } })
})

const updateType =  asyncWrapper( async (req,res,next) => {
    const {id:typeID} = req.params
    const type = await Type.findOneAndUpdate({_id:typeID}, req.body, {
        new: true,
        runValidators:true,
    });
    if (!type) {
        return next(createCustomError(`No course with id:${typeID}`, 404))
        }
    res.status(200).json({ type })
})

const deleteType = asyncWrapper( async (req,res,next) => {
    const {id:typeID} = req.params
    const type = await Type.findOneAndDelete({ _id:typeID });
    if (!type) {
        return next(createCustomError(`No course with id:${typeID}`, 404))
    }
    res.status(200).json({ type: null, status: 'success' })
})



const createUniv = asyncWrapper( async (req,res) => {
    const univ = await Univ.create(req.body)
        res.status(201).json({ univ })
})

const getUniv = asyncWrapper( async (req,res) => {
    const result = Univ.find();
        const univ = await result;    
        res
        .status(200)
        .json({ status: 'success', data: { univ, nbHits: univ.length } })
})

const updateUniv =  asyncWrapper( async (req,res,next) => {
    const {id:univID} = req.params
    const univ = await Univ.findOneAndUpdate({_id:univID}, req.body, {
        new: true,
        runValidators:true,
    });
    if (!univ) {
        return next(createCustomError(`No course with id:${univID}`, 404))
        }
    res.status(200).json({ univ })
})

const deleteUniv = asyncWrapper( async (req,res,next) => {
    const {id:univID} = req.params
    const univ = await Univ.findOneAndDelete({ _id:univID });
    if (!univ) {
        return next(createCustomError(`No course with id:${univID}`, 404))
    }
    res.status(200).json({ univ: null, status: 'success' })
})



const createCourse = asyncWrapper( async (req,res,next) => {
    const findCourse = await Course.findOne(req.body);
    if(!findCourse){
    const course = await Course.create(req.body)
        res.status(201).json({ course })
    } else{ 
    return next(createCustomError(`Course already exist`, 404))
    }   
})

const getCourses = asyncWrapper( async (req,res) => {
    const result = Course.find().populate('type university');
    const courses = await result;
        res
        .status(200)
        .json({ status: 'success', data: { courses, nbHits: courses.length } })       
})

const updateCourse =  asyncWrapper( async (req,res,next) => {
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

const deleteCourse = asyncWrapper( async (req,res,next) => {
    const {id:courseID} = req.params
    const course = await Course.findOneAndDelete({ _id:courseID });
    if (!course) {
        return next(createCustomError(`No course with id:${courseID}`, 404))
    }
    res.status(200).json({ course: null, status: 'success' })
})


const getCourseUniv = asyncWrapper( async (req,res) => {
    const {name,university} = req.params;
    const result = Course.find({name:name}).populate({
        path:'university',
        match: {university:university}
        });
    let course = await result;    
    let courses = course.filter(function(user) {
    return user.university!=null; 
    });    
        res
        .status(200)
        .json({ status: 'success', data: { courses, nbHits: courses.length } })       
})

const getCourseUnivAll = asyncWrapper( async (req,res) => {
    const result = Course.find().populate('university');
    const courses = await result;
        res
        .status(200)
        .json({ status: 'success', data: { courses, nbHits: courses.length } })       
})

const getCourseTypeAll = asyncWrapper( async (req,res) => {
    const {name,type} = req.query;
    const result = Course.find({name:name}).populate({
        path:'type',
        match: {type:type}
        }).populate('university');
    let course = await result;
    let courses = course.filter(function(user) {
        return user.type!=null; 
    });    
        res
        .status(200)
        .json({ status: 'success', data: { courses, nbHits: courses.length } })       
})




module.exports = {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    createType,
    getType,
    updateType,
    deleteType,
    createUniv,
    getUniv,
    updateUniv,
    deleteUniv,
    getCourseUniv,
    getCourseUnivAll,
    getCourseTypeAll
}
const express = require('express');
const router = express.Router();
const {
    getCourses,
    createCourse,
    getCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCourseParams,
    updateCourseTypeName,
    deleteCourseTypeName,
    updateCourseUni,
    deleteCourseUni
} = require('../controllers/course-cont')

router.get('/', getCourses)
router.post('/', createCourse)
router.get('/:id', getCourse)
router.get('/all/query', getAllCourses)
router.get('/:type/:name', getCourseParams)
router.patch('/:type', updateCourse)
router.patch('/:type/:name', updateCourseTypeName)
router.patch('/uni/course/:university', updateCourseUni)
router.delete('/:type', deleteCourse)
router.delete('/:type/:name', deleteCourseTypeName)
router.delete('/uni/course/:university', deleteCourseUni)

module.exports = router

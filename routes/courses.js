const express = require('express');
const router = express.Router();
const {
    getCourses,
    createCourse,
    getCourse,
    createCourseName,
    createCourseType,
    createCourseUni,
    updateCourse,
    deleteCourse
    
} = require('../controllers/course-cont')

router.get('/', getCourses)
router.post('/', createCourse)
router.post('/name/:name', createCourseName)
router.post('/type/:type', createCourseType)
router.post('/uni/:university', createCourseUni)
router.get('/:id', getCourse)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router

const express = require('express');
const router = express.Router();
const {
    getCourses,
    createCourse,
    getCourse,
    createCourseAll,
    updateCourse,
    deleteCourse,
    updateCourseAll,
    deleteCourseAll
} = require('../controllers/course-cont')

router.get('/', getCourses)
router.post('/', createCourse)
router.post('/all', createCourseAll)
router.get('/:id', getCourse)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)
router.patch('/course/:all', updateCourseAll)
router.delete('/course/:all', deleteCourseAll)

module.exports = router

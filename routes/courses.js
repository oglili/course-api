const express = require('express');
const router = express.Router();
const {
    getCourses,
    createCourse,
    getCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCourseParams
} = require('../controllers/course-cont')

router.get('/', getCourses)
router.post('/', createCourse)
router.get('/:id', getCourse)
router.get('/all/query', getAllCourses)
router.get('/:type/:name', getCourseParams)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router

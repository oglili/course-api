const express = require('express');
const router = express.Router();
const {
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
    
} = require('../controllers/course-cont')

router.post('/type', createType)
router.get('/type', getType)
router.patch('/type/:id', updateType)
router.delete('/type/:id', deleteType)

router.post('/univ', createUniv)
router.get('/univ', getUniv)
router.patch('/univ/:id', updateUniv)
router.delete('/univ/:id', deleteUniv)

router.get('/', getCourses)
router.post('/', createCourse)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

router.get('/:name/:university', getCourseUniv)
router.get('/all/course/univ/cat', getCourseUnivAll)
router.get('/all/course/type', getCourseTypeAll)


module.exports = router

const express = require('express');
const router = express.Router();
const {createStudent, getAllStudents, getStudentByName, updateStudent, deleteStudent} = require('../controller/studentController');

router.post('/save', createStudent);
router.get('/getAll', getAllStudents);
router.get('/getByName/:name', getStudentByName);
router.put('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;
const db = require('../db/db');

// 1. Save Student
exports.createStudent = (req, res) => {
    const { name, age, gpa } = req.body;
    const sql = 'INSERT INTO students (name, age, gpa) VALUES (?, ?, ?)';

    db.query(sql, [name, age, gpa], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ 
            id: result.insertId, 
            name, 
            age, 
            gpa 
        });
    });
};

// 2. Get All Students
exports.getAllStudents = (req, res) => {
    const sql = 'SELECT * FROM students';

    db.query(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// 3. Get Student by Name
exports.getStudentByName = (req, res) => {
    const name = req.params.name;
    const sql = 'SELECT * FROM students WHERE name LIKE ?';

    db.query(sql, [`%${name}%`], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// 4. Update Student
exports.updateStudent = (req, res) => {
    const { name, age, gpa } = req.body;
    const id = req.params.id; 
    const sql = 'UPDATE students SET name = ?, age = ?, gpa = ? WHERE id = ?';

    db.query(sql, [name, age, gpa, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Student updated successfully" });
    });
};

// 5. Delete Student
exports.deleteStudent = (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM students WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Student deleted successfully" });
    });
};
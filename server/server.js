const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;
const uploadDir = 'uploads';

// Setup multer for file upload
const upload = multer({ dest: uploadDir });

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

app.use(express.static('public'));

// POST endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    // req.file contains the uploaded file
    const pythonProcess = spawn('python3', ['./python_scripts/main.py', req.file.path]);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.json({ message: "File uploaded and Python script executed", 
                  fileUrl: '/teacher_timetable.xlsx',
                  htmlUrl: '/teacher_schedule.html' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


const express = require('express');
const fs = require('fs').promises;
const path = require('path')
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('page_code'));

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: process.env.EMAIL_USER || 'intisaradekanmbi@yahoo.com',
        pass: process.env.EMAIL_PASS || 'Homework8@'
    }
});



const DATA_FILE = 'data.json';

async function initDataFile() {
    try{
        await fs.access(DATA_FILE);
    }
    catch {
        await fs.writeFile(DATA_FILE, JSON.stringify([]));
    }
}
app.get("/goals", (req, res) => {
    res.sendFile(path.resolve('page_code/html/goals.html'), (err)=>{
    if (err)
        console.log(err);
    });
});
app.get("/form", (req, res) => {
    res.sendFile(path.resolve('page_code/html/form.html'), (err)=>{
    if (err)
        console.log(err);
    });
});
app.get("/aboutus", (req, res) => {
    res.sendFile(path.resolve('page_code/html/aboutus.html'), (err)=>{
    if (err)
        console.log(err);
    });
});
app.post('/submit-form', async (req, res) => {
    console.log('form submitted');
    try {
        const { firstName, lastName, email, comments} = req.body;

        if (!firstName || !lastName || !email) {
            return res.status(400).json({ error: 'Missing required fields'});
        }

        const userMailOptions = {
            from: process.env.EMAIL_USER || 'intisaradekanmbi@yahoo.com',
            to: email,
            subject: 'Thank you for joining our team!',
            html:
                `<div style="font-family:Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #579CAB;">Welcome to our team, ${firstName}!</h2>
                    <p> Thank you for registering your interest in joining out team striving for sustainable development</p>

                    <div style="backround-color: #C3E7F1; padding: 20px; border-radius: 8px; margin:20px 0;">
                        <h3 style="color: #20373B;"> Your Details: </h3>
                        <p><strong>Name:</strong>${firstName} ${lastName}</p>
                        <p><strong>Email:</strong>${email}</p>
                        <p><strong>Comments:</strong>${comments || 'No comment'}</p>
                    </div>
                    <p> We will be in touch </p>
                    <p>Best wishes,</p>
                    <p>sustainable development team</p>
                </div>`
                
    
        };

        await transporter.sendMail(userMailOptions);
        
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        const submission = JSON.parse(data);

        const newSubmission = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            comments: comments || '',
            date: new Date().toISOString()
        };

        submission.push(newSubmission);

        await fs.writeFile(DATA_FILE, JSON.stringify(submission, null, 2));

        res.json({success: true});
    }

    catch (error){
        console.error('Error:', error);
        res.status(500).json({error: 'error'});
    }
});

async function start() {
    await initDataFile();

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
        console.log(`form page: http://localhost:${PORT}/form.html`);
        console.log(`gender equality page: http://localhost:${PORT}/goal-gender-equality.html`);
    });
}

start();
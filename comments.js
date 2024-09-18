// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory comments storage
let comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    if (!comment) {
        return res.status(400).json({ error: 'Comment is required' });
    }
    comments.push(comment);
    res.status(201).json({ message: 'Comment added' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
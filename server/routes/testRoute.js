const express = require('express');
const TestDB = require('../TestDB');
const router = express.Router();

router.get('/run-test-db', async (req, res) => {
    try {
        await TestDB(); 
        res.status(200).json({ message: 'TestDB executed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error executing TestDB', error });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// 🟢 Obtener todas las tareas
router.get('/', async (req, res) => {
    let message = "Hello"
    res.json(message);
});

module.exports = router;

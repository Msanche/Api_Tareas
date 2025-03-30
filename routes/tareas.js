const express = require('express');
const Tarea = require('../models/Tarea');
const router = express.Router();

// 🟢 Obtener todas las tareas
router.get('/', async (req, res) => {
    const tareas = await Tarea.findAll({
        where:{
            estado:true
        }
    });
    res.json(tareas);
});

// 🔵 Crear una nueva tarea
router.post('/', async (req, res) => {
    const { titulo, descripcion } = req.body;
    const nuevaTarea = await Tarea.create({ titulo, descripcion });
    res.json(nuevaTarea);
});

// 🟡 Actualizar una tarea por ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    
    const tarea = await Tarea.findByPk(id);
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });

    await tarea.update({ titulo, descripcion });
    res.json(tarea);
});

// 🔴 Eliminar una tarea por ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findByPk(id);
    if (!tarea) return res.status(404).json({ message: 'Tarea no encontrada' });

    await tarea.update({
        estado:false
    });
    res.json({ message: 'Tarea eliminada' });
});

module.exports = router;

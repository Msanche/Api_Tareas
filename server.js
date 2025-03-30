const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const tareasRoutes = require('./routes/tareas');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/tareas', tareasRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    console.log('✅ Base de datos sincronizada');
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(err => console.error('Error al conectar la base de datos:', err));

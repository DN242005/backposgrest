const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');


const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando localmente!');
});

// Probar conexión a base de datos
sequelize.authenticate()
  .then(() => console.log('✅ Conectado a la base de datos Aiven PostgreSQL'))
  .catch((err) => console.error('❌ Error conectando a la base de datos:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

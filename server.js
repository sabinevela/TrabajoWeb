const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = 'uploads/';
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const fileName = Date.now() + fileExtension;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.static('uploads'));

app.post('/recetas', upload.single('imagen'), (req, res) => {
  const { nombre, descripcion } = req.body;
  
  if (!nombre || !descripcion || !req.file) {
    return res.status(400).send('Todos los campos son requeridos, incluyendo la imagen.');
  }

  const imagenUrl = `/uploads/${req.file.filename}`;
  
  const nuevaReceta = {
    nombre,
    descripcion,
    imagen: imagenUrl
  };

  res.status(201).send(nuevaReceta);
});

app.get('/recetas', (req, res) => {
  const recetas = [
    {
      id: '1',
      nombre: 'Torta de Chocolate',
      descripcion: 'Deliciosa torta de chocolate con cobertura de crema.',
      imagen: 'https://i.pinimg.com/736x/dc/2c/14/dc2c141d9565be80f9f3059e14588667.jpg'
    }
  ];

  res.status(200).json(recetas);
});

app.delete('/recetas/:id', (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Receta con ID ${id} eliminada.`);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

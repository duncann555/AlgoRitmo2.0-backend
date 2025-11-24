🎵 AlgoRitmo 2.0 — Backend
API REST construida por Sebastián Flomenbaun

Este backend forma parte del proyecto AlgoRitmo 2.0, una plataforma musical con manejo de usuarios, playlists personalizadas y administración completa de canciones.

Diseñado con Node.js + Express + MongoDB, el objetivo es ofrecer una API clara, escalable, segura y fácil de consumir desde el frontend en React.

🚀 Tecnologías Utilizadas

Node.js

Express

MongoDB

Mongoose

CORS

Morgan

Dotenv

Nodemon (modo desarrollo)

📌 Funcionalidades del Backend
🔐 Usuarios

Registro de usuario

Login

Validación de credenciales

(Opcional) sistema de JWT listo para incorporar

🎼 Canciones

Crear canciones

Listar todas

Obtener canción por ID

Editar canción

Borrar canción

🎧 Playlist por usuario (próximo módulo)

Crear playlist por usuario

Agregar canción a playlist

Quitar canción

Obtener playlist

Borrar playlist

📁 Estructura de Carpetas
src/
 ├── controllers/
 │     ├── canciones.controllers.js
 │     └── usuarios.controllers.js
 ├── models/
 │     ├── cancion.js
 │     └── usuario.js
 ├── routes/
 │     ├── canciones.routes.js
 │     ├── usuarios.routes.js
 │     └── index.routes.js
 ├── server/
 │     └── config.js
 ├── dbconfig.js
 └── index.js

🔗 Endpoints Principales
🎼 Canciones
Método	Ruta	Descripción
POST	/api/canciones/	Crear nueva canción
GET	/api/canciones/	Listar todas las canciones
GET	/api/canciones/:id	Obtener canción por ID
PUT	/api/canciones/:id	Editar canción
DELETE	/api/canciones/:id	Eliminar canción
🔐 Usuarios
Método	Ruta	Descripción
POST	/api/usuarios/register	Registrar usuario
POST	/api/usuarios/login	Login de usuario
🛠️ Instalación y Uso
1️⃣ Clonar el repositorio
git clone https://github.com/duncann555/AlgoRitmo2.0-backend.git
cd AlgoRitmo2.0-backend

2️⃣ Instalar dependencias
npm install

3️⃣ Crear archivo .env
PORT=3001
MONGODB=mongodb+srv://TU_URI

4️⃣ Iniciar el servidor
Modo desarrollo
npm run dev

Modo producción
npm start

🧪 Probar en Postman
Crear canción

POST http://localhost:3001/api/canciones/

Body JSON:

{
 "nombre": "Sweet Child O’ Mine",
 "artista": "Guns N' Roses",
 "categoria": "Rock",
 "album": "Appetite for Destruction",
 "anio": 1987,
 "imagen": "https://imagen.com/cancion.jpg",
 "duracion": "03:58"
}

Login de usuario

POST http://localhost:3001/api/usuarios/login

🧑‍💻 Autor
Sebastián Flomenbaun

🔥 Fullstack Developer & Cybersecurity Student
🔗 GitHub: https://github.com/duncann555

📄 Licencia

Proyecto personal y libre para uso educativo y profesional. No forma parte del proyecto grupal original.
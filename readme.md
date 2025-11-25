🎵 AlgoRitmo 2.0 — Backend
API REST creada por Sebastián Flomenbaun

Este backend forma parte del proyecto AlgoRitmo 2.0, una plataforma musical con usuarios, playlists personalizadas y un panel administrador completo.

Construido con Node.js + Express + MongoDB, ofrece una API clara, escalable, segura y pensada para integrarse perfectamente con el frontend desarrollado en React.

🚀 Tecnologías Utilizadas

Node.js

Express

MongoDB

Mongoose

CORS

Morgan

Dotenv

Nodemon (desarrollo)

📌 Funcionalidades del Backend
🔐 Usuarios

Registro de usuario

Login

Validación de credenciales

JWT funcional (token firmado y verificado desde el login)

🎼 Canciones

Crear canciones

Listar todas

Obtener canción por ID

Editar canción

Eliminar canción

🎧 Playlist por usuario (próximo módulo)

Crear playlist por usuario

Agregar canciones

Quitar canciones

Obtener playlist

Eliminar playlist

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
MONGODB=tu_uri_de_mongo
SECRET_JWT=tu_clave_secreta

4️⃣ Iniciar el servidor
🔧 Modo desarrollo
npm run dev

🚀 Modo producción
npm start

🧪 Probar en Postman / Thunder Client
➤ Crear canción

POST:
http://localhost:3001/api/canciones/

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

➤ Login de usuario

POST:
http://localhost:3001/api/usuarios/login

🔗 Enlaces Importantes

💻 Backend desplegado: https://algo-ritmo2-0-backend.vercel.app/

🎵 Frontend (sitio online): https://algoritmo-2.netlify.app/

📁 Repositorio Backend: https://github.com/duncann555/AlgoRitmo2.0-backend

📁 Repositorio Frontend: https://github.com/duncann555/AlgoRitmo2.0-frontend

🧑‍💻 Autor

Sebastián Flomenbaun
🔥 Fullstack Developer & Cybersecurity Student
🔗 GitHub: https://github.com/duncann555

📄 Licencia

Proyecto personal, libre para uso educativo y profesional.
No forma parte del proyecto grupal original.
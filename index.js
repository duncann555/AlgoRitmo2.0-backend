import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server();

server.app.use("/api", router);

// Solo prender servidor en local
if (process.env.VERCEL !== "1") {
  server.listen();
}

// Exportar app para Vercel
export default server.app;
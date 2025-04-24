import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Todo API",
      version: "1.0.0",
      description: "API para tareas, sprints y backlog",
    },
  },
  apis: ["./routes/*.js"], // Ruta de tus rutas
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };

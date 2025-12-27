const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vichar Server API Docs",
      version: "1.0.0",
      description: "API documentation for Vichar Server with JWT Auth",
    },
    servers: [
      { url: "http://localhost:5000" }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./src/routes/*.js"], 
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Swagger Docs: http://localhost:5000/docs");
}

module.exports = swaggerDocs;

import { SwaggerOptions } from "@fastify/swagger";
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const apiDocumentation: SwaggerOptions = {
  swagger: {
    info: {
      title: "Unveiled",
      description: "Official OpenAPI documentation of Unveiled app",
      version: "0.1.0"
    },
    externalDocs: {
      url: "https://github.com/Bluzzi/Unveiled/",
      description: "Find more info here"
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"]
  }
};

export const apiDocumentationUI: FastifySwaggerUiOptions = {
  routePrefix: "/documentation",
  uiConfig: {
    docExpansion: "list",
    deepLinking: false
  },
  uiHooks: {
    onRequest: function(request, reply, next) {
      next();
    },
    preHandler: function(request, reply, next) {
      next();
    }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject) => {
    return swaggerObject;
  },
  transformSpecificationClone: true
};
import { logger } from "#/utils/logger";
import fastifyAutoload from "@fastify/autoload";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import Fastify from "fastify";
import path from "path";

void (async() => {
  const fastify = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  logger.info("Loading OpenAPI plugin...");
  await fastify.register(fastifySwagger, {
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
  });

  logger.info("Loading API routes...");
  await fastify.register(fastifyAutoload, {
    dir: path.join(__dirname, "routes"),
    routeParams: true
  });

  logger.info("Loading OpenAPI UI...");
  await fastify.register(fastifySwaggerUi, {
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
  });


  try {
    await fastify.ready();
    const address = await fastify.listen({ port: 3000 });

    logger.success(`Server listening on: ${address}`);
  } catch (err) {
    logger.error("An error has occurred: " + err);
    process.exit(1);
  }
})();
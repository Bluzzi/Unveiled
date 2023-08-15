import { apiDocumentation, apiDocumentationUI } from "#/configs/open-api";
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
  await fastify.register(fastifySwagger, apiDocumentation);

  logger.info("Loading API routes...");
  await fastify.register(fastifyAutoload, {
    dir: path.join(__dirname, "routes"),
    routeParams: true
  });

  logger.info("Loading OpenAPI UI...");
  await fastify.register(fastifySwaggerUi, apiDocumentationUI);


  try {
    await fastify.ready();
    const address = await fastify.listen({ port: 3000 });

    logger.success(`Server listening on: ${address}`);
  } catch (err) {
    logger.error("An error has occurred: " + err);
    process.exit(1);
  }
})();
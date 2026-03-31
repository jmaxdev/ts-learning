import { PORT } from "../utils/config.ts"
import { Payload } from "../utils/payload.ts"
import type { TypeHandler } from "../utils/types.ts"

// Importing all method constants (* as HelloHandler) from the handler file
import * as HelloHandler from "./handlers/hello.ts"
import * as WeatherHandler from "./handlers/weather.ts"

/**
 * A helper to dispatch the correct method handler from a module.
 * Returns a 405 if the method (GET, POST, etc.) isn't exported by the module.
 */
const handleMethods = (module: any): TypeHandler => async (req, params, method) => {
  const handler = module[method] as TypeHandler | undefined
  return handler ? await handler(req, params, method) : Payload({ message: "Method Not Allowed" }, 405)
}

const RoutesHandler: Record<string, TypeHandler> = {
  "/api/hello": handleMethods(HelloHandler),
  "/api/weather": handleMethods(WeatherHandler),
}

const server = Bun.serve({
  port: PORT,
  async fetch(req: Request) {
    const url = new URL(req.url)
    const handler = RoutesHandler[url.pathname]

    if (handler) {
      return await handler(req, Object.fromEntries(url.searchParams), req.method)
    }

    return Payload({ message: "Not Found" }, 404)
  },
})

console.log(`Server running on port ${server.port}`)
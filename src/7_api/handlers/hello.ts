import { Payload } from "../../utils/payload.ts";
import type { TypeHandler } from "../../utils/types.ts";

/**
 * GET - Returns a simple Hello World message.
 */
export const GET: TypeHandler = (req, params, method) => {
  return Payload({
    message: "Hello from modular GET!",
    timestamp: Date.now(),
    params,
    method,
  });
};
 
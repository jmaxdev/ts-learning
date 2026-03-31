import { Headers } from "./config.ts";

/**
 * Formats data as a JSON response with predefined headers.
 * @param data - Data to be formatted as JSON.
 * @param status - HTTP status code (default: 200) - Optional.
 * @returns Formated json data response with headers and status code
 */
export const Payload = (data: Record<string, unknown>, status: number = 200) => {
  return new Response(JSON.stringify(data), {
    headers: {
      ...Headers,
      "Content-Type": "application/json",
    },
    status,
  });
};

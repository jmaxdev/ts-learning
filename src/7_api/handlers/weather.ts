import { Payload } from "../../utils/payload.ts"
import type { TypeHandler } from "../../utils/types.ts"

/**
 * GET - Fetches weather forecast and returns it with metadata.
 */
export const GET: TypeHandler = async (req, params, method) => {
  try {
    const res = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless"
    )

    if (!res.ok) {
      throw new Error(`Weather API returned ${res.status}`)
    }

    const data = await res.json()

    // Returning merged metadata and data
    return Payload({
      message: "Weather forecast retrieved successfully!",
    
      data, // Your weather result
    })
  } catch (error) {
    return Payload({ message: "Failed to fetch weather", error: String(error) }, 500)
  }
}
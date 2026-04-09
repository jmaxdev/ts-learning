type UserID = {
  readonly id: number | string
}

type User = {
  name: string
  age?: number | undefined
  touchedBy: string | null
  touchCount: number
}

type UserEntity = User & UserID

type RGB = [number, number, number, number?]

/**
 * Type definition for a route handler.
 * @param req - The HTTP request.
 * @param params - The route parameters.
 * @param method - The HTTP method.
 * @returns The HTTP response.
 */
type TypeHandler = (
  req: Request,
  params: Record<string, string | undefined>,
  method: string
) => Response | Promise<Response>;

export type { User, UserEntity, RGB, TypeHandler }
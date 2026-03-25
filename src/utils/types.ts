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


export type { User, UserEntity, RGB }
const name: any = "Alesis"

let age: unknown = 25

console.log(name, age)

const touch = (): void => {
  console.log("Touched")
}
// never
const throwError = (message: string): never => {
  throw new Error(message)
}


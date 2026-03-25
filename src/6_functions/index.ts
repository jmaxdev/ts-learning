const message = (msg: string | null | undefined): string => {
  if (!msg) return "No message"
  return msg
}

console.log(message("Hello"))
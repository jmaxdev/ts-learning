const PORT = process.env.PORT || 3000

const Headers = {
  "Access-Control-Allow-Origin": "*", // allow all origins
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS", // allow methods 
  "Access-Control-Allow-Headers": "Content-Type, Authorization", // allow headers
}

export { PORT, Headers }
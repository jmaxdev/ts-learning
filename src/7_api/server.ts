const router = new Bun.FileSystemRouter({
  style: "nextjs", // style of the router
  dir: import.meta.dir + "/api", // directory to search for routes
  fileExtensions: ["ts", "js"] // only read ts and js files
});

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    // if the url doesn't start with /api, return not found
    if (!url.pathname.startsWith("/api")) {
      return new Response("Not Found", { status: 404 });
    }

    // remove /api from the url
    const internalPath = url.pathname.replace(/^\/api/, "") || "/";
    
    // create a new request with the internal path
    const virtualReq = new Request(new URL(internalPath, url.origin), req);
    // match the request with the router
    const match = router.match(virtualReq);

    if (match) {
      // import the module
      const module = await import(match.filePath);
      
      // get the handler for the method
      const handler = module[req.method];

      if (handler) {
        // call the handler
        return handler(req, match.params, req.method);
      }
      // if the handler is not found, return not allowed
      return new Response(`Method ${req.method} Not Allowed`, { status: 405 });
    }

    // if the route is not found, return not found
    return new Response("API Route Not Found", { status: 404 });
  },
});
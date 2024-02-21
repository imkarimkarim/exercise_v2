const server = Bun.serve({
  port: 3001,
  fetch(request) {
    return new Response.json({msg: "Welcome to Bun!"});
  },
});

console.log(`Listening on localhost:${server.port}`);

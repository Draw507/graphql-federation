const Fastify = require("fastify");
const mercurius = require("mercurius");

const gateway = Fastify();

gateway.register(mercurius, {
  graphiql: true,
  jit: 1,
  gateway: {
    services: [
      {
        name: "accounts",
        url: "http://localhost:5018/graphql",
      },
      {
        name: "reviews",
        url: "http://localhost:5057/graphql",
      },
      {
        name: "products",
        url: "http://localhost:5297/graphql",
      },
      {
        name: "inventory",
        url: "http://localhost:5165/graphql",
      },
    ],
  },
});

const start = async () => {
  try {
    await gateway.listen(3000)
  } catch (err) {
    gateway.log.error(err)
    process.exit(1)
  }
}
start()

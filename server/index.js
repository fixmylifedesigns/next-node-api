require("dotenv").config();
const next = require("next");

const port = process.env.PORT || 4000;
const app = next({ port });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
   const server = require("./api/server.js");

   server.get("*", (req, res) => {
    return handle(req, res);
  });

server.listen(port, () => {
  console.log(`\n fixmylife-next-api Live On http://localhost:${port} \n`);
});
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });

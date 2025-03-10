import { app } from "./app.js";
import "dotenv/config.js";
import loaders from "./loaders/index.js";

loaders.start();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server is running in port: ${port}`);
});

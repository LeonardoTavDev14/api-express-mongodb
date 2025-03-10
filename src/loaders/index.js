import { testConnection } from "./mongodb.js";

class Loaders {
  start() {
    testConnection();
  }
}

export default new Loaders();

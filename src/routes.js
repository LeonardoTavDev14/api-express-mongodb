import { Router } from "express";
import UsersControllers from "./Controllers/UsersControllers.js";
import { validateMiddleware } from "./Middlewares/validateRequest.js";
import { verifyToken } from "./Middlewares/verifyToken.js";

const routes = Router();

routes.post("/users", validateMiddleware("register"), UsersControllers.create);
routes.post("/login", validateMiddleware("login"), UsersControllers.login);
routes.delete("/users/:id", verifyToken, UsersControllers.delete);
routes.get("/users/:id", verifyToken, UsersControllers.getUserByID);
routes.get("/users", verifyToken, UsersControllers.getAllUsers);
routes.put(
  "/users/:id",
  verifyToken,
  validateMiddleware("register"),
  UsersControllers.update
);

export { routes };

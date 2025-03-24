import { Router } from "express";
import UsersControllers from "./Controllers/UsersControllers.js";
import { validateMiddleware } from "./Middlewares/validateRequest.js";
import { verifyToken } from "./Middlewares/verifyToken.js";
import FeedController from "./Controllers/FeedController.js";

const routes = Router();

routes.post("/users", validateMiddleware("register"), UsersControllers.create);
routes.post("/login", validateMiddleware("login"), UsersControllers.login);
routes.post("/feedback", validateMiddleware("feedback"), FeedController.create);
routes.delete("/users/:id", verifyToken, UsersControllers.delete);
routes.get("/users/:id", verifyToken, UsersControllers.getUserByID);
routes.get("/users", verifyToken, UsersControllers.getAllUsers);
routes.put(
  "/users/:id",
  verifyToken,
  validateMiddleware("register"),
  UsersControllers.update
);
routes.post(
  "/forgot-password",
  validateMiddleware("forgot-password"),
  UsersControllers.forgotPassword
);
routes.put(
  "/reset-password/:token",
  validateMiddleware("reset-password"),
  UsersControllers.resetPassword
);

export { routes };

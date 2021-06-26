import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAdmin, createTagController.handle);

const createComplimentController = new CreateComplimentController();
router.post("/compliments", createComplimentController.handle);

export { router };
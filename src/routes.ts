import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthentication } from "./middlewares/ensureAuthentication";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ListUserSentComplimentsController } from "./controllers/ListUserSentComplimentsController";
import { ListUserReceivedComplimentsController } from "./controllers/ListUserReceivedComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/users", ensureAuthentication, createUserController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAuthentication, ensureAdmin, createTagController.handle);

const createComplimentController = new CreateComplimentController();
router.post("/compliments", ensureAuthentication, createComplimentController.handle);

const listUserSentComplimentsController = new ListUserSentComplimentsController();
router.get("/users/compliments/sent", ensureAuthentication, listUserSentComplimentsController.handle);

const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
router.get("/users/compliments/received", ensureAuthentication, listUserReceivedComplimentsController.handle);

const listTagsController = new ListTagsController();
router.get("/tags", ensureAuthentication, listTagsController.handle);

const listUsersController = new ListUsersController();
router.get("/users", ensureAuthentication, listUsersController.handle);

export { router };
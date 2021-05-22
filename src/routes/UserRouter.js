const express = express();
const route = express.Router();

router.get("/", UserController.create());
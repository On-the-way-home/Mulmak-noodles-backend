const express = require('express');
const route = express.Router();
const UserController = require('../controllers/UserController');

route.post("/", UserController.signIn);
//route.get('/auth/kakao', passport.authenticate('kakao', {failureRedirect: '#!/login',}), users.signin);
module.exports = route;

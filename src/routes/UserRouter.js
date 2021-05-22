const express = express();
const route = express.Router();

route.get('/auth/kakao', passport.authenticate('kakao', {failureRedirect: '#!/login',}), users.signin);
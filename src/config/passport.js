const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
require("dotenv").config();

passport.use(new KakaoStrategy({
    clientID : process.env.KAKAO_ID,
    clientSecret: process.env.KAKAO_SECRET,
    callbackURL : process.env.BASEURL_SERVER
  }, (accessToken, refreshToken, profile, done) => {
    // DB 스키마 및 데이터베이스 구성하고,
    // 로그인 관련해서 성공했으면 profile에 데이터가 들어옴
    // 이 데이터를 model과 연동해서 ORM으로 save 해주면 될듯.

    // 예)
    // User.findOrCreate(..., (err, user) => {
    //   if (err) { return done(err) }
    //   return done(null, user)
    // })
  }
));

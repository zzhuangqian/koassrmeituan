import passport from 'koa-passport'
import LocalStragegy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStragegy(function (username,password,done) {
  let where = {
    username
  }
  let result = await UserModel.findOne(where)
  if(result!== null){
    if(result.password === password){
      return done(null,result)
    }else {
      return done(null,false,'密码错误')
    }
  }else {
    return done(null,false,'用户不存在')
  }
}))
passport.serializeUser(function (user,done) {
  done(null,user)
})
passport.deserialize(function (user,done) {
  return done(null,user)
})

export  default passport

const authRouter = require('./auth');
const userRouter = require('./users');
const courseRouter = require('./courses');

function route(app){
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
    app.use('/api/courses', courseRouter);
}

module.exports = route;
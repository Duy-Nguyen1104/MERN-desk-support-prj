const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack 
        // the stack is a feature of the Error object that allows you to trace the error back to its origin
    })
}

module.exports = { errorHandler };

const ErrorResponse = require('../util/errorResponse')

const errorHandler = (err, req, res, next) => {
    let error = { ...err, message: err.message };
  
    switch(err.name) {
      case 'ValidationError':
        error = new ErrorResponse(
          Object.values(err.errors).map(val => val.message).join(', '),
          400
        );
        break;
      case 'SequelizeUniqueConstraintError':
        error = new ErrorResponse(`This ${err.errors[0].path} is already in use`, 400);
        break;
      
    }
  
    res.status(error.statusCode || 500).json({
      success: false,
      error: {
        message: error.message || 'Server Error',
        code: error.statusCode || 500
      }
    });
  }

module.exports = { errorHandler }
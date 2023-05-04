// Your code here
class ValidationError extends Error {
  constructor(message = 'Invalid input') {
    super();
    this.name = 'ValidationError';
    this.message = message;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, 'ValidationError');
  }
  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}

const crypto = require('crypto');

function md5Hash(password) {
  const hash = crypto.createHash('md5');
  hash.update(password);
  return hash.digest('hex');
}


module.exports = md5Hash
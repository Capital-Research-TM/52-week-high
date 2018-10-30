const db = require('../db/connection.js');



module.exports.get = (id, callback)=> {
  db.Robin.find( {id: id}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      sortByPrice(docs, callback);
    }
  })
}

const sortByPrice = (docs, callback) => {
  docs.sort((a,b) => {
    return a.prices - b.prices;
  })
  callback(null, docs);

}

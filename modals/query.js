const db = require('../db/connection.js');


module.exports.get = (id, callback)=> {
  db.Robin.find( {id: id}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
      })
    }
  });
}
//db.bios.find( { _id: 5 } )

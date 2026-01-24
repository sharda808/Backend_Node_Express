const airbnbDb = require('../util/database-util');
module.exports = class Favourite {

      static fetchAll(){
     return airbnbDb.execute(`
      SELECT homes. * FROM homes
      INNER JOIN favourites
      ON homes.id = favourites.homeId
      
      `);
      }
   static addtoFavourites(homeId){
return airbnbDb.execute(
  'INSERT INTO favourites(homeId) VALUES(?)',
  [homeId]
);
   }
     static deleteById(homeId){
return airbnbDb.execute('DELETE FROM favourites WHERE homeId = ?',
  [homeId]
);
     }
}



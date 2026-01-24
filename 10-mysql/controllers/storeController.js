const Home = require('../models/Home'); 
const Favourite = require('../models/Favouite');

exports.getIndex = (req, res, next) => {
  Home.fetchAll()
    .then(([registeredHomes ])=> {
    
      res.render('store/index', {
        homes: registeredHomes,
        pageTitle: 'Tmara Airbnb'
      });
    })
    .catch(err => next(err)); 
};

exports.getHomes = (req,res,next) => {
Home.fetchAll()
.then(([registeredHomes]) => {
res.render('store/homes',{homes:registeredHomes,pageTitle:'Tmara airbnb'})
})
}
exports.getFavourites = (req,res,next) => {
 Favourite.fetchAll().then(([favouriteHomes]) => {
  res.render('store/favourites',{
    homes:favouriteHomes,
    pageTitle:'Your Favourites'
  });
 })

}
exports.postAddFavourites = (req,res,next) => {
  const homeId = req.body.id;
Favourite.addtoFavourites(homeId).then(() => {
  res.redirect('/favourites');
})
}
exports.postRemoveFavourite= (req,res,next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId).then(() => {
    res.redirect('/favourites');
  })

}
exports.getHomeDetails = (req,res,next) => {
const homeId = req.params.homeId;
Home.findById(homeId).then(([homes]) => {
  const home = homes[0];
  if(!home){
    console.log("Home not found");
    return res.redirect("/homes");
  }
  res.render("store/home-detail",{home:home, pageTitle:"Home Detail"})
});

};
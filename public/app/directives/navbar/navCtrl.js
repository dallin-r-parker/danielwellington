angular.module('app').controller('navCtrl', ($scope) => {


  $('.nav-listoptions').scrollTop((e) => {
    console.log(e);
  });
});

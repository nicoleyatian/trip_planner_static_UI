var restaurantList = [];
var daysArr = []; // [{hotels: x, restaurants: [a, b, c], activities: []}, {}, {}]

function Day(){
  this.hotel = "";
  this.restaurant = [];
  this.activities = [];
}

function pickHotel(){
  hotel = document.getElementById("hotel").value;
  $("#hotelpicked li").remove();
  $("#hotelpicked").append('<li>'+hotel+'</li>');

}

function pickRestaurant(){
  restaurant = document.getElementById("restaurant").value;
  $("#restaurantpicked li").remove();

  if (restaurantList.length > 2){
    restaurantList.shift();
  }
  restaurantList.push(restaurant);
  restaurantList.forEach(function(elem){
    $("#restaurantpicked").append('<li>'+elem+'</li>');
  })

}

function pickActivities(){
  activities = document.getElementById("activities").value;
  $("#activitiespicked").append('<li>'+activities+'</li>');
}

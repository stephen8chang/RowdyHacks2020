var request = require("request");

var options = {
  method: "GET",
  url: "https://nutritionix-api.p.rapidapi.com/v1_1/search/apples",
  qs: {
    fields: "item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat"
  },
  headers: {
    "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
    "x-rapidapi-key": "401d28051amsh0e89c6a0b1cd526p10e19djsnfab1b1a24f9f"
  }
};

request(options, function(error, response, body) {
  if (error) throw new Error(error);
  var newBody = JSON.parse(body);

  //console.log(newBody);
  console.log(newBody.total_hits);
});

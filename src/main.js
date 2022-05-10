`Hi! Just a moment!
I tried to write this code following the rules that I have been learning from the book "Clean Code" `

const {treatInput,daysOfweek} = require("./util/util.js");
//create JSON objects for each hotel. In this way, it's simply adding a new hotel without modifying the code
const hotelAvaliable = require('./util/hotel.json');

function getCheapestHotel (input) { //DO NOT change the function's name.
    //all variables that will be used in the code
    let hotelPrices = {};
    let typeClient = '';
    let typeDate = [];
    let nameBestPriceHotel = '';
    let day = '';
    let lastPrice = Infinity;
    let costTotalByClient = 0;
    
    values = treatInput(input);
    if(values.message) return values.message;

    typeClient = values[0];
    typeDate = values[1];
    
    //As the hotels are in an Array it's possible to run a map method to get all information about it
    hotelAvaliable.map((hotel) =>{
        //When we're working with objects, it's possible to access your information in O(1) time
        hotelPrices[hotel.name] = {};

        //Calculating the total cost by a client in each different hotels
        for(let dayInArray=0; dayInArray < typeDate.length; dayInArray++){
            day = daysOfweek[typeDate[dayInArray]];
            //with the day, it's possible to select the right price from the Hotel Object
            costTotalByClient += hotel[typeClient][day];
        }
        //add cost and classification in each 'hotelPrices' object
        hotelPrices[hotel.name]['costTotalByClient'] = costTotalByClient;
        hotelPrices[hotel.name]['classificationStar'] = hotel.classificationStar;
        
        //Conditional best cost by hotel. Like this, we're able to use the same Loop map
        if(costTotalByClient < lastPrice){
            lastPrice = costTotalByClient;
            nameBestPriceHotel = hotel.name;
        }
        else if(costTotalByClient === lastPrice){
            if(hotelPrices[nameBestPriceHotel].classificationStar < hotelPrices[hotel.name].classificationStar){
                lastPrice = costTotalByClient;
                nameBestPriceHotel = hotel.name;
            }
        }
        costTotalByClient = 0;
    }
    );
    return nameBestPriceHotel;
};

exports.getCheapestHotel = getCheapestHotel;

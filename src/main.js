//Hi! Just a moment!
//I tried to write this code following the rules that I have been learning from the book "Clean Code" 

//create all the days with your type date (weekend or weekday)
var daysOfweek = { mon: 'weekday', tues: 'weekday', wed: 'weekday', thur: 'weekday', fri:'weekday', sat:'weekend', sun:'weekend'
}
//create JSON objects for each hotel. In this way, it is simply adding a new hotel without modifying the code
var hotelAvaliable = require('./util/hotel.json')

function treatInput(input){
    let typeDate = []
    //We need to treat the input, spliting in comma and colon
    let newSplit = input.split(/[:,]/);

    //Remove from the newSplit the first element who is the type of client: regular or reward
    let typeClient = newSplit.shift().toLowerCase();
    
    //A regex to find the days out between the parentheses like: (mon), (thus) and add to the array typeDate
    let wordsBetween = /\((.*)\)/;
    for(dayWeek of newSplit){
        typeDate.push(dayWeek.match(wordsBetween)[1])
    }
    
    return [typeClient, typeDate];
}

function getCheapestHotel (input) { //DO NOT change the function's name.
    //First, I check to see if the input is valid. I was thinking of creating a validation of input.
    //But is hard to check if a string input is valid. So if I were to check, first I would change
    //the input method to a JSON. In this way, I would be able to verify each label of type and dates.
    if(input === null  || input === undefined || input.length === 0) return "Invalid Input!";

    //all variables that will be used in the code
    let hotelPrices = {};
    let typeClient = '';
    let typeDate;
    let nameBestPriceHotel = '';
    let day = '';
    let lastPrice = Infinity;
    let costTotalByClient = 0;
    
    values = treatInput(input);
    typeClient = values[0];
    typeDate = values[1]
    
    //As the hotels are in an Array it's possible to run a map method to get all information about it
    hotelAvaliable.map((hotel) =>{
        //When we're working with objects, it's possible to access your information in O(1) time
        hotelPrices[hotel.name] = {};

        //Calculating the total cost of each day in different hotels
        for(let dayInArray=0; dayInArray < typeDate.length; dayInArray++){
            day = daysOfweek[typeDate[dayInArray]]
            costTotalByClient += hotel[typeClient][day];
        }
        //add cost and classification in each 'hotelPrices' object
        hotelPrices[hotel.name]['costTotalByClient'] = costTotalByClient;
        hotelPrices[hotel.name]['classificationStar'] = hotel.classificationStar;
        
        //Conditional best cost by hotel
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
}

getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)");
getCheapestHotel("Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed), 19Mar2009(thur), 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)");
getCheapestHotel("Rewards: 20Mar2009(sat)");
getCheapestHotel("Regular: 20Mar2009(sat)");

exports.getCheapestHotel = getCheapestHotel

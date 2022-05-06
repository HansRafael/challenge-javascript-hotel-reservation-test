var daysOfweek = { mon: 'weekday', tues: 'weekday', wed: 'weekday', thur: 'weekday', fri:'weekday', sat:'weekend', sun:'weekend'
}

var hotelAvaliable = require('./util/hotel.json')

function treatInput(input){
    let typeDate = []
    let newSplit = input.split(/[:,]/);
    let typeClient = newSplit.shift().toLowerCase();
    
    let wordsBetween = /\((.*)\)/;
    for(dayWeek of newSplit){
        typeDate.push(dayWeek.match(wordsBetween)[1])
    }
    
    return [typeClient, typeDate];
}

function getCheapestHotel (input) { //DO NOT change the function's name.
    if(input === null  || input === undefined || input.length === 0) return "Invalid Input!";

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
    
    hotelAvaliable.map((hotel) =>{
        hotelPrices[hotel.name] = {};

        for(let dayInArray=0; dayInArray < typeDate.length; dayInArray++){
            day = daysOfweek[typeDate[dayInArray]]
            costTotalByClient += hotel[typeClient][day];
        }

        hotelPrices[hotel.name]['costTotalByClient'] = costTotalByClient;
        hotelPrices[hotel.name]['classificationStar'] = hotel.classificationStar;
        
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
exports.getCheapestHotel = getCheapestHotel

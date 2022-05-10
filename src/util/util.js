`First, I check to see if the input is valid. I was thinking of creating a validation of input.
But is hard to check if a string input is valid. So if I were to check, first I would change
the input method to a JSON. In this way, I would be able to verify each label of type and dates.
Would be something like:
Method: POST
{
    clientType: String,
    hotelReservation: [{
        date: Date()
    }]
}`

function treatInput(input){
    try {
        if(input === null  || input === undefined || input.length === 0){
            throw new Error("Invalid Input!");

        }else{
            let typeDate = [];
            //We need to treat the input, spliting in comma and colon
            let newSplit = input.split(/[:,]/);
        
            //Remove from the newSplit the first element who is the type of client: regular or reward
            let typeClient = newSplit.shift().toLowerCase();
            
            //A regex to find the days out between the parentheses like: (mon), (thus) and add to the array typeDate
            let wordsBetween = /\((.*)\)/;
            for(dayWeek of newSplit){
                typeDate.push(dayWeek.match(wordsBetween)[1]);
            };
            return [typeClient, typeDate];
        }
    } catch (error) {
        return error;
    }
};

//create all the days with your type date (weekend or weekday)
const daysOfweek = { mon: 'weekday', tues: 'weekday', wed: 'weekday', thur: 'weekday', fri:'weekday', sat:'weekend', sun:'weekend'
};

exports.treatInput = treatInput;
exports.daysOfweek = daysOfweek;
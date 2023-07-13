export const inputValidator = (requestBody, callback) => {
    let isBetween3And4 = requestBody.cvv.length >= 3 && requestBody.cvv.length <= 4;
    let isDifferentThan4 = requestBody.expirationYear.length == 4
    let isMonthBetween1and2 = requestBody.expirationMonth.length >= 1 && requestBody.expirationMonth.length <= 2;
    let isValidEmail = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(requestBody.email);
    if( !(isBetween3And4 && isDifferentThan4 && isMonthBetween1and2 && isValidEmail)){
        callback(null, {
            statusCode: 400,
            body: JSON.stringify("Invalid Input parameter")
        })
    }
}

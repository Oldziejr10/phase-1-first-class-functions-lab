const divers = (['Antonia', 'Nuru', 'Amari', 'Mo']);


const returnFirstTwoDrivers = function (divers) {
    return divers.slice(0,2)
}

const returnLastTwoDrivers = function (divers) {
    return divers.slice(-2)
}

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

const createFareMultiplier = function(fareMultiplier) {
    return function(value) {
        return fareMultiplier * value
    }
}
 
const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3); 

 function selectDifferentDrivers(divers, returnDrivers) {
return returnDrivers(divers);

 }
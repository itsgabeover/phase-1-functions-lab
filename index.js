// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    let blocks = Math.abs(pickUpLocation - 42);
    return blocks;
}

function distanceFromHqInFeet(someValue){
    let feet = 264 * distanceFromHqInBlocks(someValue);
    return feet;
}

function  distanceTravelledInFeet(start, end){
    let distanceInFeet = Math.abs(start - end)*264;
    return distanceInFeet;
}

function calculatesFarePrice(start, end){
    let distanceInFeet = Math.abs(start - end)*264;
    if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    } else if (distanceInFeet > 2000){
        return 25;
    }
    else if (distanceInFeet < 400){
        return 0;
    }
    else {
        return (distanceInFeet - 400)*.02;
    }
}
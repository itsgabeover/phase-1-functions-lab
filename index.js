// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(pickUpLocation - 42);
    
}

function distanceFromHqInFeet(pickUpLocation){
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function  distanceTravelledInFeet(start, end){
    return (Math.abs(start - end)*264);
}

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end)
    if (distance < 400){
        return 0;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
    else if (distance < 2000) {
        return (distance - 400) * .02;
    }
    else {
        return 25;
    }
}
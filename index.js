function produceDrivingRange(range) {
    return function(block1, block2){

        let start = parseInt(block1);
        let end = parseInt(block2);
        let distance = (start - end)
        let difference = Math.abs(distance)

        if (difference > range) {
            return `${difference - range} blocks out of range`
        } else {
            return `within range by ${range - difference}`
        }
    }
}

function produceTipCalculator(percentTip) {
    return function(price){
        return price*percentTip
    }
}

function createDriver() { 
    let driverId = 0

    return class {
        constructor(name) {
            this.id = ++driverId
            this.name = name
        }
    };
}
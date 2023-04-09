const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0

function batteries(){
    totalBatteries = batteryBatches.reduce(function(totalBatteries,currentValue){
        return totalBatteries + currentValue
    },0)
    return totalBatteries
    
}
batteries()
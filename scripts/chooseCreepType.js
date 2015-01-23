/*
 * Module to choose which creep to spawn next
 */
 
 module.exports = function(spawn) {
    var numHarvesters = 0;
    var numHaulers = 0;
    var numBuilders = 0;
    var numGuards = 0;
    var numMedics = 0;
    var creepList = Game.creeps;
    
    //count creeps of each type
    for ( var c in creepList ) {
        var creep = creepList[c];
        
        if ( creepList[c].memory.homeSpawn == spawn.id ) {
            if ( creep.memory.role == 'harvester' ) {
                numHarvesters++;
            }
            if ( creep.memory.role == 'hauler' ) {
                numHaulers++;
            }
            if ( creep.memory.role == 'builder' ) {
                numBuilders++;
            }
            if ( creep.memory.role == 'guard' ) {
                numGuards++;
            }
            if ( creep.memory.role == 'medic' ) {
                numMedics++;
            }
        }
        
    }
    
    //the result to return; null if no creep needs to spawn
    var result = null;
    
    //choose which type of creep is needed
    if ( numHaulers < numHarvesters ) {
        result = 'hauler';
    }
    else if ( numHarvesters < 3 ) {
        result = 'harvester';
    }
    else if ( numMedics < numGuards / 3 ) {
        result = 'medic';
    }
    else {
        result = 'guard'; //make more guards if all other parts are satisfied
    }
    
    //return the result of this selection
    return result;
};

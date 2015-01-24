/*
 * Module to choose which creep to spawn next
 */
 
 module.exports = function(spawn) {
    //variables to count the number of each variable
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
            else if ( creep.memory.role == 'hauler' ) {
                numHaulers++;
            }
            else if ( creep.memory.role == 'builder' ) {
                numBuilders++;
            }
            else if ( creep.memory.role == 'guard' ) {
                numGuards++;
            }
            else if ( creep.memory.role == 'medic' ) {
                numMedics++;
            }
        }
    }
    
    //the result to return; null if no creep needs to spawn
    var result = null;
    
    //choose which type of creep is needed
    if ( numHarvesters < 3 ) {
		result = 'harvester'
	}
    else if ( numHaulers < numHarvesters ) {
        result = 'hauler';
    }
    else if ( numGuards < numHarvesters ) {
        result = 'guard';
    }
    else if ( numMedics < numGuards / 3 ) {
        result = 'medic';
    }
    else if (numHarvesters < 5 ) {
        result = 'harvester';
    }
    else {
		result = 'guard';
	}
    
    //return the result of this selection
    return result;
};

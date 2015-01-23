require('lodash');

module.exports = function(creep) {
    var home = creep.pos.findClosest( Game.MY_SPAWNS );
    var source = creep.pos.findClosest( Game.SOURCES );
    
    var toBuild = creep.pos.findClosest( Game.CONSTRUCTION_SITES );
    var toFix = creep.pos.findClosest( Game.MY_STRUCTURES, {
        filter: function(object) {
            object.hits < object.hitsMax;
        }
    } );
    
    if ( creep.energy > 0 ) {
        if ( toBuild ) {
            if ( !creep.pos.isNearTo(toBuild) ) {
                creep.moveTo(toBuild);   
            }
            creep.build(toBuild);
        }
        else if ( toFix ) {
            if ( !creep.pos.isNearTo(toBuild) ) {
                creep.moveTo(toFix);                
            }
            creep.repair(toFix);
        }
    }
    else {
        creep.moveTo(home);
        home.transferEnergy(creep);
    }
};

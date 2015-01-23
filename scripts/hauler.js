
module.exports = function(creep) {
    var spawn = creep.pos.findClosest( Game.MY_SPAWNS );
    
    var harvester;
    
    var myHarvesterName = 'harvester' + creep.memory.number;
    var myHarvester = Game.creeps[myHarvesterName];
    
    var fullHarvester = creep.pos.findClosest( Game.MY_CREEPS, {
        filter: function(object) {
            return ( object.memory.role == 'harvester' && object.energy > object.energyCapacity / 2 );
        }
    } );
    
    var nearHarvester = creep.pos.findClosest( Game.MY_CREEPS, {
        filter: function(object) {
            return object.memory.role == 'harvester';
        }
    } );
    
    if ( myHarvester ) {
        harvester = myHarvester;
    } else if ( fullHarvester ) {
        harvester = fullHarvester;
    } else if ( nearHarvester ) {
        harvester = nearHarvester;
    }
    
    if ( harvester ) {
        if ( creep.energy == creep.energyCapacity || harvester.energy === 0 ) {
            creep.moveTo(spawn);
            creep.transferEnergy(spawn);
        }
        else {
            creep.moveTo(harvester);
            harvester.transferEnergy(creep);
        }
    }
    
};
    

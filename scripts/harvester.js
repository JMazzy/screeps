 module.exports = function(creep) {
     var home = Game.getObjectById( creep.memory.homeSpawn );
     
     var myHaulerName = 'hauler' + creep.memory.number;
     var myHauler = Game.creeps[myHaulerName];
     
     var mySource = Game.getObjectById( creep.memory.homeSource );
     
     if ( creep.energy < creep.energyCapacity ) {
        creep.moveTo( mySource );
        creep.harvest( mySource );
     }
     else if ( myHauler ) {
        creep.moveTo(myHauler);
        creep.transferEnergy(myHauler);
     }
     else {
        creep.moveTo(home);
        creep.transferEnergy(home);
     }
 };

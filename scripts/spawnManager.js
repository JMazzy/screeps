/*
* Based on the supplied creep type, this spawns a creep at the supplied spawn
* Creep type body parts are stored here
* Also finds a unique name for each creep and gives the creep its memories
*/

//function which tells a certain spawn to spawn a creep of the supplied type
module.exports = function( spawn, creepType ) {
    
    console.log( 'spawning creep of type ' + creepType);
    
    var body;
    if ( creepType == 'harvester' ) {
        body = [ Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE ];
    }
    else if ( creepType == 'hauler' ) {
        body = [ Game.CARRY, Game.CARRY, Game.MOVE, Game.MOVE ];
    }
    else if ( creepType == 'builder' ) {
        body = [ Game.WORK, Game.WORK, Game.CARRY, Game.MOVE ];
    }
    else if ( creepType == 'guard' ) {
        body = [ Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, Game.TOUGH, 
            Game.MOVE,
            Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK, Game.RANGED_ATTACK ];
    }
    else if ( creepType == 'medic' ) {
        body = [ Game.TOUGH, Game.TOUGH,Game.TOUGH, Game.TOUGH, Game.TOUGH, 
            Game.MOVE,
            Game.HEAL, Game.HEAL, Game.HEAL, Game.HEAL ];
    }
    
    var creepNumber = 0;
    var creepName = creepType.concat(creepNumber);
     
    while( Game.creeps[creepName] ) {
        creepNumber++;
        creepName = creepType.concat(creepNumber);
    }
    
    var spawnId = spawn.id;
    var sourceId = spawn.pos.findClosest( Game.SOURCES ).id;
    
    spawn.createCreep( body, creepName, { role: creepType, homeSpawn: spawnId, homeSource: sourceId, number: creepNumber } );
 };

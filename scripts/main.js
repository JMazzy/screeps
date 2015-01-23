//required functions
var spawnManager = require( 'spawnManager' );
var performRoles = require( 'performRoles' );
var chooseCreepType = require( 'chooseCreepType' );

//have creeps perform roles
performRoles();

//iterate through all spawns
for ( var s in Game.spawns ) {
    var spawn = Game.spawns[s];
    
    if ( spawn.pos.findClosest( Game.SOURCES ) ) {
        //make sure the spawn isn't already spawning
        if ( !spawn.spawning ) {
            
            //choose a creep to spawn
            var toSpawn = chooseCreepType( spawn );
            
            //if there is a creep to be spawned, pass the creep type to the spawn manager
            if ( toSpawn ) {
                spawnManager( spawn, toSpawn );
            }
        }
    }
}

module.exports = function(creep) {
    var home = creep.pos.findClosest( Game.MY_SPAWNS ); //the place the creep should return when not working
    
    var source = creep.pos.findClosest( Game.SOURCES ); //the source the creep should use if needed
    
    if ( creep.energy > 0 ) {			//make sure creep has energy to build with
		var toBuild = creep.pos.findClosest( Game.CONSTRUCTION_SITES ); //the construction site to build
		var toFix = creep.pos.findClosest( Game.MY_STRUCTURES, { //the structure to fix
			filter: function(object) {
				object.hits < object.hitsMax; //filtered for structures which have damage
			}
		} );
		
        if ( toBuild ) { 				//if there is something to build
            if ( !creep.pos.isNearTo(toBuild) ) {//if the creep is not already near the build site
                creep.moveTo(toBuild);  //move to the build site 
            }
            creep.build(toBuild);		//build the structure specified
        }
        else if ( toFix ) { 			//if there isn't anything to build, check if there is something to fix
			
            if ( !creep.pos.isNearTo(toBuild) ) {//if the creep is not already near the build site
				
                creep.moveTo(toFix);	//move to the object that needs repair       
            }
            
					
            creep.repair(toFix);		//repair the specified structure
        }
    }
    else {								//otherwise
        creep.moveTo(home);				//move to the home spawn
        home.transferEnergy(creep);		//grab some more energy
    }
};

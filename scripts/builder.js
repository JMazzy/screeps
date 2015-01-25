module.exports = function(creep) {
    //the place the creep should return when not working
    var home = creep.pos.findClosest( Game.MY_SPAWNS ); 
    
    //the source the creep should use if needed
    var source = creep.pos.findClosest( Game.SOURCES ); 
    
    //make sure creep has energy to build with
    if ( creep.energy > 0 ) {			
		
		//the construction site to build
		var toBuild = creep.pos.findClosest( Game.CONSTRUCTION_SITES ); 
		
		//the structure to fix
		var toFix = creep.pos.findClosest( Game.MY_STRUCTURES, { 
			//filter for structures which have damage
			filter: function(object) {
				object.hits < object.hitsMax; 
			}
		} );
		
		//if there is something to build
		if ( toBuild ) { 	
			
			//if the creep is not already near the build site			
            if ( !creep.pos.isNearTo(toBuild) ) {
				
				//move to the build site 
                creep.moveTo(toBuild);  
            }
            
            //build the structure specified
            creep.build(toBuild);		
        }
        //if there isn't anything to build, check if there is something to fix
        else if ( toFix ) { 			
			
			//if the creep is not already near the build site
            if ( !creep.pos.isNearTo(toBuild) ) {
				
				//move to the object that needs repair       
                creep.moveTo(toFix);	
            }
            
			//repair the specified structure		
            creep.repair(toFix);		
        }
    }
    //otherwise
    else {		
		//move to the home spawn						
        creep.moveTo(home);		
        //grab some more energy		
        home.transferEnergy(creep);		
    }
};

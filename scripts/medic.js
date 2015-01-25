/*
*/

module.exports = function(creep) {
    //the point for idle medics to gather
    var gatherPoint = Game.flags.hospital;
    
    //the nearest hurt creep
    var hurtCreep = creep.pos.findClosest( Game.MY_CREEPS, {
        filter: function(object) {
            return object.hits < object.hitsMax;
        }
    } );
    
    //if there is a hurt creep
    if ( hurtCreep ) {
		//move to the hurt creep
        creep.moveTo(hurtCreep);
        
        //if adjacent to the hurt creep
        if ( creep.pos.inRangeTo( hurtCreep, 1 ) ) {
			//heal the hurt creep
			creep.heal(hurtCreep);
		}
		//else if in healing range to the hurt creep
		else if ( creep.pos.inRangeTo( hurtCreep, 3 ) || creep.pos.inRangeTo( hurtCreep, 2 ) ) {
			//heal the hurt creep from a distance
			creep.rangedHeal(hurtCreep);
		}
    } else {
		//otherwise move to the gather point set above
        creep.moveTo(gatherPoint);
    }
};

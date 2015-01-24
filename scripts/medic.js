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
        if ( creep.isNearTo( hurtCreep ) {
			//heal the hurt creep
			creep.heal(hurtCreep)
		}
		//else if in healing range to the hurt creep
		else if ( creep.inRangeTo( hurtCreep, 3 ) {
			//heal the hurt creep from a distance
			creep.rangedHeal(hurtCreep);
		}
    } else {
        creep.moveTo(gatherPoint);
    }
};

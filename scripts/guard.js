module.exports = function(creep) {
	//The flag the creep should guard
    var myFlagName = 'g' + creep.memory.number;
    var myFlag = Game.flags[myFlagName];
    
    //the target the creep should attack if possible
    var target = creep.pos.findClosest( Game.HOSTILE_CREEPS );
    
    //check if the target exists and is in range
    if ( target && creep.pos.inRangeTo( target, 3 )) {
        //attack the target
        creep.rangedAttack(target);
    }
    //check if the flag exists and the creep is not already there
    else if ( myFlag && !creep.pos.inRangeTo( myFlag, 0 ) {
		//move to the flag
		creep.moveTo( myFlag );
	}
};

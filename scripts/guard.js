module.exports = function(creep) {
    var myFlagName = 'g' + creep.memory.number;
    var myFlag = Game.flags[myFlagName];
    
    var target = creep.pos.findClosest( Game.HOSTILE_CREEPS );
    
    if ( target && creep.pos.inRangeTo( target, 3 )) {
        creep.rangedAttack(target);
    }
    else if ( myFlag && !creep.pos.inRangeTo( myFlag, 0 ) {
		creep.moveTo( myFlag );
	}
};

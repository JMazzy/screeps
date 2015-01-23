module.exports = function(creep) {
    var gatherPoint;
    if ( 1 ) {
        var myFlagName = 'Flag' + ( creep.memory.number );
        gatherPoint = Game.flags[myFlagName];
    } else {
        gatherPoint = Game.spawns.Spawn1;
    }
    
    var target = creep.pos.findClosest( Game.HOSTILE_CREEPS );
    
    creep.moveTo(gatherPoint);
    
    if (target) {
        creep.rangedAttack(target);
    }
};

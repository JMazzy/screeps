/*
*/

module.exports = function(creep) {
    var gatherPoint = Game.flags.hospital;
    
    var myGuardName = 'guard' + creep.memory.number;
    var myGuard = Game.creeps[myGuardName];
    
    var hurtCreep = creep.pos.findClosest( Game.MY_CREEPS, {
        filter: function(object) {
            return object.hits < object.hitsMax;
        }
    } );
    
    var nearGuard = creep.pos.findClosest( Game.MY_CREEPS, {
        filter: function(object) {
            return object.memory.role == 'guard';
        }
    } );
    
    if ( hurtCreep ) {
        creep.moveTo(hurtCreep);
        creep.heal(hurtCreep)
        creep.rangedHeal(hurtCreep);
    } else {
        creep.moveTo(gatherPoint);
    }
};

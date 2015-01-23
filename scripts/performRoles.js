var harvester = require( 'harvester' );
var hauler = require( 'hauler' );
var builder = require( 'builder' );
var guard = require( 'guard' );
var medic = require( 'medic' );
var scavenger = require('scavenger');
var ranger = require('ranger');

module.exports = function() {
    for ( var c in Game.creeps ) {
        var creep = Game.creeps[c];
        if ( creep.memory.role == 'harvester' ) {
            harvester( creep );
        }
        else if ( creep.memory.role == 'hauler' ) {
            hauler( creep );
        }
        else if ( creep.memory.role == 'guard' ) {
            guard( creep );
        }
        else if ( creep.memory.role == 'medic' ) {
            medic( creep );
        }
        else if ( creep.memory.role == 'builder' ) {
            builder(creep);
        }
    }
};


'use strict';


module.exports = {

    attempt: function(){
        return[function(a){return a;},3];
    },

    identity: function(){
        return[{'elem1':35,'elem2':true}];
    },

    method: function() {
        return['a.b'];
    },

    methodOf: function() {
        return[ { a:{b: function(){return 5;}}}  ];
    },

    noop: function(){
        return[{'number':5,'square':25}];
    },

    nthArg1: function(){
        return[2];
    },

    nthArg2: function(){
        return[-1];
    },

    over1: function(){
        return[ [function(a){return Math.floor(a);}, function(b){return Math.sqrt(b);}]];
    },

    over2: function(){
        return[ function(a){return Math.abs(a);} ];
    },

    over3: function(){
        return[ [function(a,b,c,d,e){return Math.max(a,b,c,d,e);}, function(a,b,c,d,e){return Math.min(a,b,c,d,e);}] ];
    },

    overEvery1: function(){
        return[ [function(a){return Math.floor(a);}, function(b){return Math.sqrt(b);}] ];
    },

    overEvery2: function(){
        return[[function (a) {
            if(a%5==0 && a%6==0)
                return true;
        },function (a) {
            if( (a%5 !=0 && a%6==0) || (a%5==0 && a%6 !=0))
                return a; else return a;
        }
        ]];
    },

    overSome1: function(){
        return[ [function(a){ if(a%3===0) return true; else return false;}, function(b){if (b%10===0) return true; else return false;}] ];
    },

    overSome2: function(){
        return[ [function(a){return a;}] ]
    },

    property1: function(){
        return['a.b'];
    },

    property2: function(){ //parametry w testach pisze ze ma to byc obiekt
        return[ ['c', 'd'], 'c.d' ];
    },

    propertyOf1: function(){
        return[ {number1:[1,15,15,30,37,5],number2:[1,2,30,30,4,5],number3:[1,2,3,37,37,5]} ];
    },

    propertyOf2: function(){
        return[{number1:[1,15,15,30,37,5],number2:[1,2,30,30,4,5],number3:[1,2,3,37,37,5]}];
    },

    range1: function(){
        return[6];
    },

    range2: function(){
        return[5,9];
    },

    range3: function(){
        return[-10,-15,-1];
    },

    rangeRight1: function(){
        return[5];
    },

    rangeRight2: function(){
        return[3,10];
    },

    rangeRight3: function(){
        return[2,12,2];
    },

    times: function(){
        return[5,function(a){return a*a;}];
    },

    toPath: function(){
        return['.a.b.c.4'];
    },

    uniqueId1: function(){
        return['value_'];
    },

    uniqueId2: function(){
        return['nextValue_'];
    }
};
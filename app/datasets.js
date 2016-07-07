'use strict';

module.exports = {

    add: function ()
    {
        return [8-9,-1];
    },

    ceil: function ()
    {
        return [1.845,2];
    },

    divide: function ()
    {
        return [1,0];
    },

    floor: function ()
    {
        return [5.477,2];
    },

    max: function ()
    {
        return [[5,3,1,4,2]];
    },

    maxBy1: function ()
    {
        return [ [{ 'a': 1,'b':1 },{ 'a': 2,'b':2 },{ 'a': 3,'b':3 } ],function(o) { return o.a; } ];;
    },

    maxBy2: function (o)
    {
        return [[{ Name: 'Edwin', Gold: 1500 },{ Name: 'Edwin', Gold: 2500 },{Name: 'Edwin', Gold: 1500}],'Gold'];
    },

    mean: function ()
    {
        return [[4, 3.25, 1.25, 5.5]];
    },

    meanBy1: function (o)
    {
        return [[{ 'n': 27 }, { 'n': 26 },{ 'n': 28 }],function(o) { return o.n; }];
    },

    meanBy2: function ()
    {
        return [[{ n: 3 }, { n: 3 },{ n: 3 },{ n: 3}],'n'];
    },

    min: function ()
    {
        return [[4, 2, 8, 6,9,-3]];
    },

    minBy1: function ()
    {
        return [[{name: 'Justin', age: 22},{name: 'Justin', age: 23},{name: 'Justin', age: 21}],function(o) { return o.age; }];
    },

    minBy2: function ()
    {
        return [[{Name: 'Bob', Gold: 1290}, {Name: 'Bob', Gold: 2010},{Name: 'Bob', Gold: 200}],'Gold'];
    },

    multiply: function ()
    {
        return [-15,-1];
    },

    round: function ()
    {
        return [8.2458,3];
    },

    subtract: function ()
    {
        return [15,0];
    },

    sum: function ()
    {
        return [[4,1,2,3]];
    },

    sumBy1: function ()
    {
        return [[{sum: 3340.5},{ sum: 0},{sum: 0}],function(o) { return o.sum; }];
    },

    sumBy2: function ()
    {
        return [[{Gold: 0}, {Gold: 0},{Gold: 0},{Gold: 193}],'Gold'];
    }
};

'use strict';

module.exports = {

    _: function ()
    {
        return [[1,2,3,4]];
    },

    chain: function ()
    {

        var users = {
            user1 : {'user': 'Mark', 'gold': 1500000},
            user2 : {'user': 'Freddy', 'gold': 2000000},
            user3 : {'user': 'John', 'gold': 250000}
        }
        return [users];
    },

    tap: function ()
    {
        function a(){

        }
        return [[4,6,8,10],a];
    },

    thru: function ()
    {
        function a(b){
            return [b];
        }
        return ['roses are red', a];
    },

    _prototype: function ()
    {

        return [['a','b','c','d']];
    },

    prototypeAt: function ()
    {

        return [['Address[0].person.name',
            'Address[0].person.surname',
            'Address[1].st.number',
            'Address[1].st.name',
            'Address[2].city']];
    },

    prototypeChain: function ()
    {
        var users = [
            {'name': 'Mark', 'age': 26},
            {'name': 'Jack', 'age': 32},
            {'name': 'Kate', 'age': 38, 'gender': 'female'}
        ];

        return [users];
    },

    prototypeCommit: function ()
    {

        return [['old commit','commit']];
    },

    prototypeNext: function ()
    {
        return [['Kate','Smith',30]];
    },

    prototypePlant: function ()
    {

        return [[9,16]];
    },

    prototypeReverse: function ()
    {
        return [[5,3,7,4]];
    },

    prototypeValue: function ()
    {
        return [['Andy','Flower',30,4600]];
    }
};
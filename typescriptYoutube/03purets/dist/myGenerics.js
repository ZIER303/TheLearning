"use strict";
const score = [];
const names = [];
// not good
function identityOne(val) {
    return val;
}
// not good either
function identityTwo(val) {
    return val;
}
// use this
function identityThree(val) {
    return val;
}
//identityThree(3)
function identityFour(val) {
    return val;
}
//identityFour<Bottle>({})
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}

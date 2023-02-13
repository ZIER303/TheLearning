const score: Array<number> = []
const names: Array<string> = []
// not good
function identityOne(val: boolean | number): boolean | number{
    return val
}
// not good either
function identityTwo(val: any): any{
    return val
}
// use this
function identityThree<Type>(val: Type): Type{
    return val
}

//identityThree(3)

function identityFour<T>(val: T):T {
    return val
}

//you can define your own type
interface Bottle{
    brand: string,
    type: number
}

//identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}
//object

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valueOne:T, valueTwo:U):object {
    return{
        valueOne,
        valueTwo
    }    
}

//anotherFunction(3, {})

// Class types in Generic
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
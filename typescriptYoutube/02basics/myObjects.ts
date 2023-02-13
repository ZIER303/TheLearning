//This is wrong

/* const User = {
    name: "ZIER",
    email: "ZIER@gmail.com",
    isActive: true
}

//This is right

function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "zier", isPaid: false, email:"zzz@ze.me"}

createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 6969}
} */

//type aliases

/* type User = {
    name: string;
    email: string;
    isActive: boolean;
}

//Wierd yet allowed but dont use it
type Mystring = string

function createUser(user: User){}

createUser({name:"", email:"", isActive:true}) */

type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    // ? mean optional
    creditcardNetails?: number
}

let myUser: User = {
    _id: "1563",
    name: "XXXZ",
    email: "z@x.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

//define a new type with the existing ones
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "ZZZZ@gmail.com"


export{}
function addTwo(num: number): number{
    return num+2
}

addTwo(5)
 
function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loggedInUser = (name:string, email:string, 
    isPaid: boolean = false) => {
}

//We can return more than one type
function getValue(myVal: number){
    if(myVal > 5){
        return true
    }
    return "200 OK"
}

const getHello = (s: string):string => {
    return ""
} 

const heroes = ["thor", "spiderman", "ironman"]

heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

//use never for handling Error
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

addTwo(5)
getUpper("zier")
signUpUser("ZIER", "zier@gmail.com", false)
loggedInUser("Z","Z@Z.com")

export{}
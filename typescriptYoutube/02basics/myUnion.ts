//in case it can be more than one datatype
let score: number | string = 33

score = 44
score = "55"

//Union
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let ZIER: User | Admin = {name: "ZIER", id: 303}
ZIER = {username: "ZR", id:3333}

//function
/* function getDbId(id: number| string){
    //making some API calls
    console.log('DB id is: '+id);
} */

//typechecking
function getDbId(id: number| string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

getDbId(3)
getDbId("3")

//array
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

//fix value
let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"

export{}
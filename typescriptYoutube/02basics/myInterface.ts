interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const zier: Admin = {
    dbId: 333 ,
    email: "dfsd@g.com", 
    userId: 2211,
    githubToken: "github",
    role: "admin", 
startTrail:()=>{
    return "trial started"
},
getCoupon: (name: "ZIER", off: 50) => {
    return 10
}
}



zier.email = "zier@me.com"

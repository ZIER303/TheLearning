//Instead of this

/* const AISLE = 0
const MIDDEL = 1
const WINDOW = 2

if(seat === 0){

} */

//Use enum intead
enum SeatChoice {
    AISLE = "aisle",
    MIDDEL = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE

export{}
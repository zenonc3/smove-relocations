export interface Booking {
    id: number,
    start: string,
    end: string
}

export interface Solution {
    bookingSet: Booking[],
    relocations: number,
}

export interface StartIndex {
    [start: string]: Booking[],
}
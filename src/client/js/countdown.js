import { daysFromCurrentDate } from "./daysfromcurrent"

const createCountdown = (startDate) => {
    const daysUntil = daysFromCurrentDate(startDate)
    let countdownMessage = ''
    if (daysUntil > 0) {
        countdownMessage = `Your trip begins in just ${daysUntil} days!`
    } else if (daysUntil === 0) {
        countdownMessage = `Today is the day!`
    } else {
        countdownMessage = `This trip started ${daysUntil} days ago.`
    }
    return countdownMessage 
}

export { createCountdown }
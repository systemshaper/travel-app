import { daysFromCurrentDate } from "./daysfromcurrent"

const createCountdown = (startDate) => {
    const daysUntil = daysFromCurrentDate(startDate)
    const countdownMessage = `Your trip begins in just ${daysUntil} days!`
    return countdownMessage 
}

export { createCountdown }
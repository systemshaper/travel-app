
const daysFromCurrentDate = (futureDate) => {
    const current = new Date()
    const target = new Date(futureDate)
    const difference = target.getTime() - current.getTime()
    const daysAhead = Math.floor(difference / (1000 * 60 * 60 * 24)) + 1
    return daysAhead
}

export { daysFromCurrentDate }
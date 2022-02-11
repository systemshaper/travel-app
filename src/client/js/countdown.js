
const createCountdown = (startDate) => {
    const current = new Date()
    const target = new Date(startDate)
    const difference = target.getTime() - current.getTime()
    const daysUntil = Math.floor(difference / (1000 * 60 * 60 * 24));
    const countdownMessage = `Your trip begins in just ${daysUntil} days!`

    document.querySelector('#countdown').textContent = countdownMessage  
}

export { createCountdown }
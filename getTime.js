function getTime(time) {
    let year
    let month
    let week
    let day
    let hour
    let minute
    let second

    second = time % 60
    minute = Math.floor(time / 60)
    hour = Math.floor(minute / 60)
    day = Math.floor(hour / 24)
    week = Math.floor(day / 7)
    month = Math.floor(week / 4)
    year = Math.floor(month / 12)

    minute = minute >= 60 ? minute % 60 : minute
    hour = minute > 60 ? hour + Math.floor(minute / 60) : hour
    hour = hour >= 24 ? hour % 24 : hour
    day = hour > 24 ? day + Math.floor(hour / 24) : day
    day = day >= 7 ? day % 7 : day
    week = day > 7 ? week + Math.floor(day / 7) : week
    week = week >= 4 ? week % 4 : week
    month = week > 4 ? month + Math.floor(week / 4) : month
    month = month >= 12 ? month % 12 : month 
    year = month > 12 ? year + Math.floor(month / 12) : year

    return `${year}y ${month}mth ${week}w ${day}d ${hour}h ${minute}min ${second}s`
}

console.log(getTime(30));

// let num = 0
// setInterval(() => {
//     num++
//     console.log(getTime(num));
// }, 1000)

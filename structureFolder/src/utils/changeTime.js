const days = [
    'Chủ nhật',
    'Thứ hai',
    'Thứ ba',
    'Thứ tư',
    'Thứ năm',
    'Thứ sáu',
    'Thứ bảy'
]
export const changeTime = (currentDate) => {
    const day = currentDate.getDate()        // ngày
    const month = currentDate.getMonth() + 1 // tháng (0 → 11)
    const year = currentDate.getFullYear()   // năm
    const weekDay = currentDate.getDay()
    const weekDayText = days[currentDate.getDay()]

    console.log(`${weekDayText}, ${day}/${month}/${year}`)
    return `${weekDayText}, ${day}/${month}/${year}`
}

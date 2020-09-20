import months from '../constants/months.json'

export const getDateString = (date) =>{
    return months[date.month].name + " " + date.day + ", " + date.year
}

export const isLeapYear = (year) =>{
    return year%4 === 0
}

export const currentMonth = (task, currentDate) =>{
    let date = new Date(currentDate.year, currentDate.month, currentDate.day)
    let month = task.startDate.month
    let year = task.startDate.year
    if(month===date.getMonth() && year===date.getFullYear()){
      return true
    }
    else if(year<=date.getFullYear() && month<=date.getMonth()){
      if(task.endDate){
        let endMonth = task.endDate.month
        let endYear = task.endDate.year
        if(endYear>year || (endYear===year && endMonth>month)){
          if(endMonth>=date.getMonth() && endYear>=date.getFullYear()){
            return true
          }
        }
      }
    }

    return false
}
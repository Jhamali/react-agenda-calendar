import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

import months from '../../../constants/months.json'
import { isNullOrUndefined } from '../../../utility/nullOrUndefined'
import { isLeapYear, currentMonth } from '../../../utility/date';
import cssStyles from  './CalendarCells.module.css'
import Event from './Event'

const CalenderCells = ({ date, setMonthYear, agenda }) => {

    
  const [days, setDays] = useState(Array(28).fill().map((_, idx) => 1 + idx))
  const [firstDays, setFirstDays] = useState([])
  const [extraDays, setExtraDays] = useState([])
  const [calendarDate, setDate] = useState({day:new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()})
  const [monthlyAgenda, setMonthlyAgenda] = useState(Array(28).fill().map((_) => []))

  useEffect(() => {
    let numberOfDays = calendarDate.month===1 && isLeapYear(calendarDate.year)===true ?  months[calendarDate.month].days+1 : months[calendarDate.month].days
    let date = new Date(calendarDate.year, calendarDate.month, 1)
    let endDate = new Date(calendarDate.year, calendarDate.month, numberOfDays)
    let day = date.getDay()
    let day2 = endDate.getDay()

    let previousMonth = calendarDate.month === 0 ? 11 : (calendarDate.month - 1)
    let previousDays = previousMonth===1 && isLeapYear(calendarDate.year)===true ? months[previousMonth].day+1 : months[previousMonth].days
    
    let firstDays = Array(day).fill().map((_, d)=> previousDays-d).reverse()
    let monthDays = Array(numberOfDays).fill().map((_, d) => 1 + d)
    let extraDays = Array(6-day2).fill().map((_, d)=> 1 + d)
    
    setFirstDays(firstDays)
    setDays(monthDays)
    setExtraDays(extraDays)
    setMonthYear(months[calendarDate.month].name + " " + calendarDate.year)
    getMonthlyAgenda()
    return () => {
      
    }
  }, [calendarDate])

  useEffect(() => {
    let newYear = calendarDate.year
    let newMonth = calendarDate.month
    if(date){
      if( isNullOrUndefined(date.year)===false){
        if(date.year>0){
          newYear = date.year
        }
      }
      if(isNullOrUndefined(date.month)===false){
        if(date.month>=0 && date.month<=11){          
          newMonth = date.month
        }      
      }
      setDate({day: calendarDate.day, month: newMonth, year: newYear})
    }
    return () => {
      
    }
  }, [date])

  const getMonthlyAgenda = () =>{
    let numberOfDays = calendarDate.month===1 && isLeapYear(calendarDate.year)===true ?  months[calendarDate.month].days+1 : months[calendarDate.month].days
    let currentAgenda = Array(numberOfDays).fill().map((_) => [])
    agenda.map((task)=>{
      if(currentMonth(task,calendarDate)===true){
        let pos = currentAgenda[task.startDate.day-1]
        pos.push(task.title)
        currentAgenda[task.startDate.day-1] = pos
      }
    })  
    setMonthlyAgenda(currentAgenda)  
  }


  const styles = {
    cells: {
      width: 100 / 7 + '%', 
      minWidth: 100 / 7 + '%', 
      display: "table-cell"   
    },
  }

  return (
    <div id={"rscCalendarCells"} className={cssStyles.rscDaysRow}>    
      {firstDays.map((day, key) => (
        <div className={(key%7===0 ) ? `${cssStyles.rscCells} ${cssStyles.rscFirstColumn}` : `${cssStyles.rscCells}`}>
          <div className={cssStyles.rscCellText} style={{color: "rgba(0,0,0,0.3)"}}>{day}</div>
        </div>
      ))}
      {days.map((day, key) => (
        <div className={(key%7===0 ) ? `${cssStyles.rscCells} ${cssStyles.rscFirstColumn}` : `${cssStyles.rscCells}`}>
          <div className={cssStyles.rscCellText}>
            {day}
            <Event texts={monthlyAgenda[key]}/>
          </div>
          
        </div>
      ))}
      {extraDays.map((day, key) => (
        <div className={(key%7===0 ) ? `${cssStyles.rscCells} ${cssStyles.rscFirstColumn}` : `${cssStyles.rscCells}`}>
          <div className={cssStyles.rscCellText} style={{color: "rgba(0,0,0,0.3)"}}>{day}</div>
        </div>
      ))}
    </div>
  )
}

CalenderCells.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  day: PropTypes.number,
  setMonthYear: PropTypes.func,
  agenda: PropTypes.array
};

CalenderCells.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: 1,
  setMonthYear: ()=>{},
  agenda: []
};

export default CalenderCells

import React, { useState } from 'react'
import PropTypes from 'prop-types';

import DaysHeader from './DaysHeader/DaysHeader'
import CalendarCells from './CalendarCells/CalendarCells'
import styles from './Calendar.module.css'

const Calendar = ({ year, month, day, agenda }) => {

  const [monthYear, setMonthYear] = useState("")  

  return (
  <div id={"rscCalenderComponent"} className={styles.rscCalendar}>
      <div className={styles.rscMonthYear}>{monthYear}</div>
      <DaysHeader/> 
      <CalendarCells agenda={agenda} setMonthYear={setMonthYear} date={{day:day, month: month, year: year}}/>     
  </div>
  )
}

Calendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  day: PropTypes.number,
  agenda: PropTypes.array
};

Calendar.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: 1,
  agenda: []
};

export default Calendar

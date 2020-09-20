import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

import Calendar from './components/Calender/Calendar'
import ButtonsRows from './components/Buttons/ButtonRows'
import Agenda from './components/Agenda/Agenda'
import styles from './styles.module.css'

const ScheduleCalendar = ({ day, month, year, agenda }) => {

  const [showAgenda, setShowAgenda] = useState(false)
  const [date, setDate] = useState({day:new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()})

  const agendaRef = React.createRef()

  useEffect(() => {
    
    const currentRef = agendaRef.current
    if(showAgenda===true)
      currentRef.classList.add(styles.rscAgendaOpen)
    else
      currentRef.classList.remove(styles.rscAgendaOpen)
    return () => {
      
    }
  }, [showAgenda])

  useEffect(() => {
    setDate({day:day, month: month-1, year: year})
    return () => {
      
    }
  }, [])

  const previousMonth = () =>{
    if(date.month===0){
      setDate({day:date.day, month: 11, year: date.year-1})
    }
    else{
      setDate({day:date.day, month: date.month-1, year: date.year})
    }
  }

  const nextMonth = () =>{
    if(date.month===11){
      setDate({day:date.day, month: 0, year: date.year+1})
    }
    else{
      setDate({day:date.day, month: date.month+1, year: date.year})
    }
  }

  const goToToday = () =>{
    let d = new Date()
    setDate({day:date.day, month: d.getMonth(), year: d.getFullYear()})
  }

  return (
  <div className={styles.rscMainContainer}>
    <div className={styles.rscComponentContainer}>
      <div className={styles.rscCalenderContainer}>    

        <ButtonsRows previousMonth={previousMonth} nextMonth={nextMonth} goToToday={goToToday}  setShowAgenda={setShowAgenda} showAgenda={showAgenda}/>

        {/* <button className={styles.rscCreateButton}>Create New</button>       */}

        <Calendar agenda={agenda} month={date.month} year={date.year} day={date.day}/>

      </div>      

      <div ref={agendaRef} className={styles.rscAgendaContainer}>        
        <Agenda agenda={agenda} currentDate={date}/>
      </div>

    </div>
  </div>
  )
}

ScheduleCalendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  day: PropTypes.number,
  agenda: PropTypes.array
};

ScheduleCalendar.defaultProps = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: 1,
  agenda: []
};

export default ScheduleCalendar

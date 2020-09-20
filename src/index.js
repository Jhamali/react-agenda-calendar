import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';

import Calendar from './components/Calender/Calendar'
import ButtonsRows from './components/Buttons/ButtonRows'
import Agenda from './components/Agenda/Agenda'
import styles from './styles.module.css'

const ScheduleCalendar = ({ currentDate, agenda, containerStyle, containerClassName }) => {

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
    
    if (!isNaN(currentDate.getTime()))    
      setDate({day:currentDate.getDate(), month: currentDate.getMonth(), year: currentDate.getFullYear()})
    
    return () => {
      
    }
  }, [currentDate])

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
  <div style={containerStyle} className={containerClassName? containerClassName : styles.rscMainContainer}>
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
  agenda: PropTypes.array,
  containerStyle: PropTypes.object,
  currentDate: PropTypes.instanceOf(new Date())
};

ScheduleCalendar.defaultProps = {
  agenda: [],
  containerStyle: {},
  currentDate: new Date()
};

export default ScheduleCalendar

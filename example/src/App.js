import React, {useEffect, useState} from 'react'

import ScheduleCalender from 'react-schedule-calendar'
import 'react-schedule-calendar/dist/index.css'
import agendaList from './exams.json'

import styles from './styles.module.css'
import exams from './exams.json'

const App = () => {

  const [agenda, setAgenda] = useState([])

  useEffect(() => {
    let newAgenda = agendaList.map(task=> changeFormat(task))
    setAgenda(newAgenda)
    return () => {
      
    }
  }, [agendaList])

  const changeFormat = (task) =>{
    let newtask = task
    let startDate = new Date(task.startDate)
    let endDate = new Date(task.endDate)
    newtask.startDate={year: startDate.getFullYear(), month: startDate.getMonth(), day: startDate.getDate()}
    newtask.endDate={year: endDate.getFullYear(), month: endDate.getMonth(), day: endDate.getDate()}
    newtask.title = task.examTitle
    return newtask
  }
  
  return <ScheduleCalender agenda={agenda} day={6} month={1} year={2004} />
}

export default App

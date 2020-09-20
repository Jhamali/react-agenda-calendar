import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import styles from './Agenda.module.css'

import { getDateString, currentMonth } from '../../utility/date'

const Agenda = ({ agenda, currentDate }) => {

  const [agendaList, setAgendaList] = useState([])
  const [seeAll, setSeeAll] = useState(false)

  useEffect(() => {
    setAgendaList((agenda.filter(task=>currentMonth(task, currentDate))))
    return () => {
      
    }
  }, [agenda, currentDate])

  useEffect(() => {
    if(seeAll===true){
      setAgendaList(agenda)
    }
    else{
      setAgendaList((agenda.filter(task=>currentMonth(task, currentDate))))
    }
    return () => {
      
    }
  }, [seeAll])

  return (
  <div id={"rscAgenda"} className={styles.rscAgenda}>
       <div className={`${styles.rscAgendaHeader}  ${styles.rscAgendaRow}`}>
           Schedule
       </div>
       <div className={styles.rscAgendaList}>
        {agendaList.map((task, key)=>(
          <div className={`${styles.rscAgendaInfo}  ${styles.rscAgendaRow}`}>
            <div className={styles.rscAgendaInfoTitle}>            
              {task.title}
            </div>
            <div className={styles.rscAgendaInfoDate}>
              {getDateString(task.startDate)}
            </div>
          </div>
        ))}
       </div>
       <div onClick={()=>setSeeAll(!seeAll)} className={styles.rscSeeAll}>See All</div>
  </div>
  )
}

Agenda.propTypes = {
  agenda: PropTypes.array,
  date: PropTypes.object
};

Agenda.defaultProps = {
  agenda: [],
  date: {day:new Date().getDate(), month: new Date().getMonth(), year: new Date().getFullYear()}
};

export default Agenda

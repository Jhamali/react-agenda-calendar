import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

import styles from './Buttons.module.css';
import Buttons from './Buttons'

const ButtonRows = ({showAgenda, setShowAgenda, goToToday, nextMonth, previousMonth}) => {
  return (
    <div className={styles.rscButtonRow}>
      <div className={styles.rscButtonSection}>
        <Buttons onClick={goToToday} text={'Today'} />
        <Buttons onClick={previousMonth} text={'Back'} />
        <Buttons onClick={nextMonth} noRightBorder text={'Next'} />
      </div>
      <div className={styles.rscButtonSection} style={{ marginLeft: 'auto'}}>
        {/* <Buttons text={'Month'} />
        <Buttons text={'Week'} />
        <Buttons text={'Day'} /> */}
        <Buttons onClick={()=>setShowAgenda(!showAgenda)} noRightBorder text={'Agenda'} />
      </div>
    </div>
  )
}

ButtonRows.propTypes = {
  showAgenda: PropTypes.bool,
  setShowAgenda: PropTypes.func,
  goToToday: PropTypes.func,
  nextMonth: PropTypes.func,
  previousMonth: PropTypes.func,
};

ButtonRows.defaultProps = {
  showAgenda: false,
  setShowAgenda: ()=>{},
  goToToday: ()=>{},
  nextMonth: ()=>{},
  previousMonth: ()=>{},
};

export default ButtonRows

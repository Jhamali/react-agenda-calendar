import React from 'react'
import PropTypes from 'prop-types';
import styles from './CalendarCells.module.css'

const Event = ({ texts }) => {
  return (
    <div className={styles.rscEvents}>
        {texts.map(text=>(
            <div className={styles.rscEvent}>
                {text}
            </div>
        ))}
    </div>
    
  )
}

Event.propTypes = {
    text: PropTypes.array
  };
  
Event.defaultProps = {
    text: []
};

export default Event

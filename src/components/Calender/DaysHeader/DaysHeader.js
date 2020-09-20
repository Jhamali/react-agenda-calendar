import React from 'react'

import days from '../../../constants/days.json'

const DaysHeader = ({ containerClassName }) => {
  const styles = {
    daysRow: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#f5f6fa',
      paddingTop: "20px",
      paddingBottom: "20px",
      border: "solid 1px #f5f6fa",
    },
    daysCell: {
      width: 100 / 7 + '%',
      fontSize: '12px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#a3a6b4'
    }
  }
  return (
    <div style={styles.daysRow}>
      {days.map((day, _) => (
        <div style={styles.daysCell}>{day.short.toUpperCase()}</div>
      ))}
    </div>
  )
}

export default DaysHeader

import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import styles from './Buttons.module.css'

const Buttons = ({ text, noRightBorder, onClick }) => {

  return (
  <div onClick={onClick} className={styles.rscButton} style={{...(noRightBorder ? {borderRight: "unset !important"} : {})}}>
       {text}
  </div>
  )
}

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  noRightBorder: PropTypes.any,
  onClick: PropTypes.func
};

Buttons.defaultProps = {
  text: "",
  onClick: ()=>{}
};

export default Buttons

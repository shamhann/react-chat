import React from 'react'
import styles from './profile.module.css'
import { useSelector } from 'react-redux';

function Name (props) {
  const application = useSelector(state => state.application.items);

  return (
    <div >
      <div className={styles.avatar}>

      </div>

      <h3 className={styles.name} >
        {props.item.fullname}
      </h3>

      <div className={styles.email}>
        {props.item.username}
      </div>

      <div className={styles.icon}>
        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-video-camera" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Name
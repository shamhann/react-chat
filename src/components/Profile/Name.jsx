import React from 'react'
import styles from './profile.module.css'

function Name (props) {
  return (
    <div >
      <div className={styles.avatar}>
        к
      </div>

      <h3 className={styles.name}>
        Кудузов Ахмад
      </h3>

      <div className={styles.email}>
        @kuduzow
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
import React from 'react';
import styles from "./profile.module.css"
import Name from './Name'
import Social from './Social'
import Media from './Media'

function Profile(props) {
    return (
      <div className={styles.profile}>
        <Name/>
        <Social/>
        <Media/>
      </div>
    );
}

export default Profile;
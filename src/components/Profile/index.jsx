import React, { useEffect } from 'react';
import styles from "./profile.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '../../redux/ducks/application';
import ProfileInfo from './ProfileInfo';

function Profile() {

    const dispatch = useDispatch();

    const application = useSelector(state => state.application.items);


    useEffect(() => {
        dispatch(loadProfile());
    },[])

    return (
      <div className={styles.profile}>
          {application.map(item => {
              return <ProfileInfo item={item} key={item.id}/>
          })}
      </div>
    );
}

export default Profile;
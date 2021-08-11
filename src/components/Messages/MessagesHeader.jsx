import React from 'react';
import styles from "./messages.module.css";

function MessagesHeader(props) {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.search}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className={styles.name}>
                    Кудузов Ахьмад 	<span className={styles.onLine}>&#8226;</span>
                </div>
                <div className={styles['open-profile']}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
            </div>
            <div className={styles['border-line']}>

            </div>
        </div>
    );
}

export default MessagesHeader;
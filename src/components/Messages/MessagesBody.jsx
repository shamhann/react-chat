import React from 'react';
import styles from "./messages.module.css";

function MessagesBody(props) {
    return (
        <div className={styles.body}>
            <div className={styles['to-message']}>
                <div className={styles['message-text']}>Hello</div>
                <div className={styles['message-time']}>13:50</div>
            </div>
            <div className={styles['to-message']}>
                <div className={styles['message-text']}>Hello еще раз</div>
                <div className={styles['message-time']}>14:24</div>
            </div>
            <div className={styles['missed-message']}>Пропущенный вызов</div>
            <div className={styles['to-message']}>
                <div className={styles['message-text']}>Hello кхоолг1а</div>
                <div className={styles['message-time']}>15:21</div>
            </div>
            <div className={styles['from-message-wrap']}>
                <div className={styles['from-message-avatar']}>К</div>
                <div className={styles['from-message']}>
                    <div className={styles['message-text']}>Ху бах</div>
                    <div className={styles['message-time']}>17:45</div>
                </div>

            </div>
            <div className={styles['to-message']}>
                <div className={styles['message-text']}>Хумма...</div>
                <div className={styles['message-time']}>18:33</div>
            </div>
            <div className={styles['to-message']}>
                <div className={styles['message-text']}>Хези хьун</div>
                <div className={styles['message-time']}>19:22</div>
            </div>

        </div>
    );
}

export default MessagesBody;
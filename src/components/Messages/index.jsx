import React from 'react';
import styles from "./messages.module.css";
import MessagesHeader from "./MessagesHeader";
import MessagesBody from "./MessagesBody";
import MessageFooter from "./MessageFooter";

function Messages(props) {
    return (
        <div className={styles.messages}>
            <div className={styles['messages-header']}>
                <MessagesHeader />
            </div>
            <div className={styles['messages-body']}>
                <MessagesBody />
            </div>
            <div className={styles['message-footer']}>
                <MessageFooter />
            </div>

        </div>
    );
}

export default Messages;
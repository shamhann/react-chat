import React from 'react';
import FormContacts from './FormContacts';
import styles from './contacts.module.css';

function Contacts(props) {
  return (
    <div className={styles.contacts}>
      <FormContacts />
      <div className={styles.users}>
        <div className={styles['users-avatar']}>Д</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Дмитрий Петров</div>
          <div className={styles['users-text']}>Хочу на курсы</div>
        </div>
        <div className={styles['users-time']}>15:55</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>Д</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Даниил Мартынов</div>
          <div className={styles['users-text']}>Здравствуйте</div>
        </div>
        <div className={styles['users-time']}>16:15</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>Ж</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Жорди Альба</div>
          <div className={styles['users-text']}>Хочу к Месси</div>
        </div>
        <div className={styles['users-time']}>16:45</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>Ш</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Шамхан Базиев</div>
          <div className={styles['users-text']}>Собар дееее</div>
        </div>
        <div className={styles['users-time']}>17:49</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>+</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>+7 922 002-11-02</div>
          <div className={styles['users-text']}>ответье пожалуйста</div>
        </div>
        <div className={styles['users-time']}>17:55</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>А</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Алексей Иванов</div>
          <div className={styles['users-text']}>Добрый день</div>
        </div>
        <div className={styles['users-time']}>20:15</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>П</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Петр Первый</div>
          <div className={styles['users-text']}>Я первый</div>
        </div>
        <div className={styles['users-time']}>21:21</div>
      </div>

      <div className={styles.users}>
        <div className={styles['users-avatar']}>А</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>Амирхан</div>
          <div className={styles['users-text']}>че надо????????</div>
        </div>
        <div className={styles['users-time']}>22:55</div>
      </div>
    </div>
  );
}

export default Contacts;

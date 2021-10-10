import React from 'react';
import styles from './Text.module.scss';

export const Text = ({children, avatar, name}:{children: React.ReactNode, avatar: string, name: string}) => {
  const style = {'backgroundImage': `url(${process.env.PUBLIC_URL + "/"}expr-${avatar}.png)`};
  return <div className={styles.wrapper}>
    <div className={styles.inner}>
      {name && <div className={styles.name}>{name}</div>}
      <div className={styles.avatar} style={style}></div>
      <div className={styles.text}>{children}</div>
    </div>
  </div>
}
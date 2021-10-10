import React from 'react';
import styles from './Screen.module.scss';

export const Screen = ({ children, bg, Component, onDone }: {
  children: React.ReactNode,
  bg: string,
  onDone: (goto?: string) => void
  Component?: React.FC<{ onDone: (goto?: string) => void }>
}) => {
  const style = { 'backgroundImage': `url(${bg})` };
  return <div className={styles.fullScreen} style={style}>
    <div className={styles.content}>
      {Component && <Component onDone={onDone}/>}
    </div>
    <div className={styles.footer}>
      {children}
    </div>
  </div>
}
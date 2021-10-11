import React from 'react';
import styles from './ChoosePlace.module.scss';
import { goto } from './goto';
import { playSound } from './playSound';

export const ChoosePlace = ({ onDone }: { onDone: (goto?: string) => void }) => {
  return <div className={styles.wrapper}>
    <div className={styles.choise} onClick={() => onDone('home')}>Я у себя дома и один</div>
    <div className={styles.choise} onClick={() => onDone('nothome')}>Я не один или в неудобном месте</div>
    <div className={styles.choise} onClick={() => playSound('incorrect')}>Смешная третья опция</div>
    <div className={styles.choise} onClick={()=>goto('https://www.youtube.com/watch?v=na47wMFfQCo')}>Я вообще не Либуся и не понимаю как сюда попал, спасите помогите</div>
    <div className={styles.choise} onClick={() => goto('https://www.youtube.com/watch?v=kYy-qJHLD4Q')}>Я на собрании
      секты любителей маленьких кукурузных качанчиков
    </div>
  </div>
}

export const ChooseCake = ({ onDone }: { onDone: (goto?: string) => void }) => {
  return <div className={styles.wrapper}>
    <div className={styles.choise} onClick={() => onDone('cake')}>Взять Торт</div>
    <div className={styles.choise} onClick={() => onDone('youtube')}>Нажать Кнопку</div>
    <div className={styles.choise} onClick={() => onDone('stuff')}>Подумать о вечном</div>
    <div className={styles.choise} style={{ fontFamily: '\'Press Start 2P\'', fontSize: '16px'}} onClick={() => {
      onDone('spamtron');
      document.body.classList.add('spamtron');
      playSound('spamtron', true)
    }}>[[hyperlink Blocked]]</div>
  </div>
}

export const Stuff = ({ onDone }: { onDone: (goto?: string) => void })=>{
  return <div className={styles.iframe}>
    <iframe src={'https://randstuff.ru/saying/'}></iframe>
  </div>
}
import { useCallback, useEffect, useState } from 'react';
import styles from './Spamtron.module.scss';

export const Spamtron = ({ onDone }: { onDone: (goto?: string) => void }) => {
  const [images, setImages] = useState<Array<[number, number]>>([[
    Math.random() * (window.innerWidth - 200),
    Math.random() * (window.innerHeight - 316),
  ]]);

  const spawn = useCallback(() => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        Notification.requestPermission(() => {
        });
      }
      if (Math.random() > 0.5) {
        navigator.permissions.query({ name: 'geolocation' })
      }
      if (Math.random() > 0.5) {
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices.getUserMedia(constraints);
      }
    }, 100);

    setImages(images => {
      const n: Array<[number, number]> = [];
      const target = Math.ceil(images.length * 1.5);
      for (let i = 0; i < target; i++) {
        n.push([
          Math.random() * (window.innerWidth - 200),
          Math.random() * (window.innerHeight - 316),
        ]);
      }
      return n;
    })
  }, [setImages]);

  useEffect(() => {
    document.body.addEventListener('click', spawn)
  }, []);

  return <>
    {images.map(
      ([x, y]) => <img
        src={process.env.PUBLIC_URL + '/error.gif'}
        className={styles.error}
        style={{ top: y + 'px', left: x + 'px' }} />)}
  </>
}
export const SpamtronNoControl = ({ onDone }: { onDone: (goto?: string) => void }) => {
  const [images, setImages] = useState<Array<[number, number]>>([[
    Math.random() * (window.innerWidth - 200),
    Math.random() * (window.innerHeight - 20),
  ]]);

  const spawn = useCallback(() => {
    setImages(images => {
      const n: Array<[number, number]> = [];
      const target = Math.ceil(images.length * 100);
      for (let i = 0; i < target; i++) {
        n.push([
          Math.random() * (window.innerWidth - 200),
          Math.random() * (window.innerHeight - 20),
        ]);
      }
      return n;
    })
  }, [setImages]);

  useEffect(() => {
    spawn();
    document.body.addEventListener('click', spawn)
  }, []);

  return <>
    {images.map(
      ([x, y]) => <img
        src={process.env.PUBLIC_URL + '/error.gif'}
        className={styles.error}
        style={{ top: y + 'px', left: x + 'px' }} />)}
  </>
}
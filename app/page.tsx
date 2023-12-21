"use client"
import styles from './page.module.css'
import { useEffect, useState, useRef } from 'react';
import moment from 'moment'
import Merry from '@/components/merry';


export default function Home() {

  const [datetime, setDatetime] = useState({
    days:0,
    minutes:0,
    hours:0,
    seconds:0

  });

  const interval = useRef<any>();

  const calcTime = () => {
    let t1= moment('2020-12-25 20:00:00');

    let t2 = moment();

    //计算时间差并转换成标准时间单位

    const days = t2.diff(t1, 'day')
    const hours = t2.diff(t1, 'hour')%24;
    const minutes = t2.diff(t1, 'minute')%60;
    const seconds = t2.diff(t1, 'second')%60;

    setDatetime({
      days,
      minutes,
      hours,
      seconds
    });
  }


  useEffect(() => {
    interval.current = setInterval(calcTime,1000);
    return () => {
      if(interval.current){
        clearInterval(interval.current);
      }
    }
  });

  return (
    <main className={styles.main}>

      <div className={ styles.wrapper }>

        <div>
          <img src="avatar1.jpg" style={ { width: 60, borderRadius: '50%' } } alt={'avatar image'}/>
          <img src="z.webp" alt={'love gif'}/>
          <img src="avatar2.jpg" style={ { width: 60, borderRadius: '50%' } }  alt={'avatar image'}/>
        </div>
        <div className={ styles['love-time'] } >
          <div><h2>我们相恋了<span style={ { color: 'red' } }>❤</span></h2></div>
          <h2 className={ styles.timer }>
            <b>
              { datetime.days  }
            </b>
            天
            <b>
              { ' ' + (datetime.hours > 9 ? datetime.hours : ' ' + datetime.hours) }
            </b>
            小时
            <b>
              { ' ' + (datetime.minutes > 9 ? datetime.minutes : ' ' + datetime.minutes) }
            </b>
            分
            <b>
              { ' ' + (datetime.seconds > 9 ? datetime.seconds : ' ' + datetime.seconds) }
            </b>
            秒

          </h2>
        </div>
      </div>
      <Merry></Merry>

    </main>
  )
}

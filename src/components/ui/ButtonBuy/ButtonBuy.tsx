import React from 'react'
import Link from "next/link";
import styles from './styles.module.css';

const ButtonBuy = () => {
  return (
    <>
      <Link href={'#feedback'} className={styles.buttonbuy}>Заказать</Link>
    </>
  )
}

export default ButtonBuy;
"use client";
import React from 'react'
import Link from "next/link";
import styles from './styles.module.css';

const ButtonBuy = () => {
  return (
    <>
      <Link href={'#feedback'} className={styles.buttonBuy}>Заказать</Link>
    </>
  )
}
export default ButtonBuy;
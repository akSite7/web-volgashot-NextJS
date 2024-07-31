import React from 'react';
import styles from './styles.module.css';

const Badge = ({ children }: React.PropsWithChildren) => {
  return (
    <span className={styles.badgeItem}>
      {children}
    </span>
  )
}
export default Badge;
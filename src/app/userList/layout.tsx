import React from 'react'
import styles from './page.module.css'

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default Layout
"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Register",
    url: "/",
  },
  {
    id: 2,
    title: "User List",
    url: "/userList",
  },
  {
    id: 3,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
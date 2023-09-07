"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import styles from "./styles.module.css";

const NavigationHeaderSecondary = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.navigation}>
      <ul className={styles.links_wrapper}>
        <li>
          <Link href="/">
            <Image
              src="/images/svg/purple-flame-logo-hi.svg"
              height={50}
              width={50}
              alt="Brand Logo"
              priority={true}
            />
          </Link>
        </li>
        <li>
          <Link
            className={
              pathname === "/signup" ? styles.active_link : styles.link
            }
            href="/signup"
          >
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationHeaderSecondary;

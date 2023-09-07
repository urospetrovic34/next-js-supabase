"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

import data from "content/json/primary-nav-items.json";

const NavigationHeaderPrimary = () => {
  const { items } = data;
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.links_wrapper}>
        {items.map((item, index) => {
          const isActiveLink = item.path === pathname;
          return (
            <li key={index}>
              <Link
                className={isActiveLink ? styles.active_link : styles.link}
                href={item.path}
                onClick={() => setHoveredPath(item.path)}
              >
                <p className={styles.link_label}>{item.name}</p>
                {item.path === hoveredPath ? (
                  <motion.div
                    className={styles.animated_line}
                    layoutId="navigation"
                    transition={{
                      type: "spring",
                      velocity: 100,
                      stiffness: 80,
                    }}
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationHeaderPrimary;

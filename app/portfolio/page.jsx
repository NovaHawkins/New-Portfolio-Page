import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import Button from "@/components/Button/Button"

/* import Projects from "./projects.json" */

const Portfolio = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.imgContainer}>
        <Image
          src="/about.jpeg"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.Title}>Projects</h1>
        </div>
        
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          {/* <h1 className={styles.title}>Projects</h1> */}
          {/* Insert project link code here */}
        </div>

      </div>
    </div>
  )
}

export default Portfolio

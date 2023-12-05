import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Find me on my socials:</div>
      <div className={styles.social}>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
      </div>
    </div>
  );
};

export default Footer;

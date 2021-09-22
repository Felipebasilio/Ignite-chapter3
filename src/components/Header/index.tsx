import Image from "next/image";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <Image
          src="/images/logo.svg"
          alt=" "
          layout="fill"
          /> */}
        <img src="/images/logo.svg" alt="" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
};

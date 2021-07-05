import Link from "next/link"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.title} href='/'>
          <a>Hacker News</a>
        </Link>{" "}
        | &nbsp;
        <Link href='/newstories'>
          <a>new</a>
        </Link>{" "}
        | &nbsp;
        <Link href='/past'>
          <a>past</a>
        </Link>{" "}
        | &nbsp;
        <Link href='/comments'>
          <a>comments</a>
        </Link>{" "}
        | &nbsp;
        <Link href='/ask'>
          <a>ask</a>
        </Link>{" "}
        | &nbsp;
        <Link href='/show'>
          <a>show</a>
        </Link>{" "}
        | &nbsp;
        <Link href='/jobs'>
          <a>jobs</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <section>
          <div>Center nav block</div>
          <ul>
            <li>
              <a href="#">Atricle</a>
            </li>
          </ul>
        </section>
        <aside>
          <p>Popular Tags</p>
          <div></div>
        </aside>
      </div>
    </main>
  );
}

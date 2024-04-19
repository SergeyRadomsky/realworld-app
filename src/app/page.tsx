import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Conduit</h1>
        <h2>A place to share your knowledge</h2>
      </div>
      <div>
        <section>
          <div>Center nav block, and added tags</div>
          <ul>
            <li>
              {/* ВРЕМЕННАЯ КОНСТАНТНАЯ ССЫЛКА */}
              <a href="/article/1">Atricle</a>
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

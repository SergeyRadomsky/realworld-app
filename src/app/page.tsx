// "use client";
import Image from "next/image";
import s from "./page.module.scss";
import { ARTICLES } from "@/utils/constants/mocks";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div>
//         <h1>Conduit</h1>
//         <h2>A place to share your knowledge</h2>
//       </div>
//       <div>
//         <section>
//           <div>Center nav block, and added tags</div>
//           <ul>
//             <li>
//               {/* ВРЕМЕННАЯ КОНСТАНТНАЯ ССЫЛКА */}
//               <a href="/article/1">Atricle</a>
//             </li>
//           </ul>
//         </section>
//         <aside>
//           <p>Popular Tags</p>
//           <div></div>
//         </aside>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  // {
  //   searchParams,
  // }: {
  //   searchParams: { [key: string]: string | string[] | undefined };
  // }) {
  //   const page = searchParams["page"] ?? "1";
  //   const per_Page = searchParams["per_page"] ?? "5";
  
  //   const start = (Number(page) - 1) * Number(per_Page); //0, 5, 10, ...
  //   const end = start + Number(per_Page); // 5, 10, 15 ////
  
  //   const entries = ARTICLES.articles.slice(start, end);
  
  return (
    <div className="home-page">
      <section>
        <div className={s.banner}>
          <div className={s.container}>
            <h1 className={s.logoFont}>conduit</h1>
            <p className={s.logoText}>A place to share your knowledge.</p>
          </div>
        </div>
      </section>

      <div className={`${s.container} ${s.page}`}>
        <div className={s.row}>
          <div className={s.content}>
            <div className="feed-toggle">
              <ul
                className={`${s.navContent} ${s.navPills} ${s.outlineActive}`}
              >
                <li className="nav-item">
                  <a className={`${s.navLink} ${s.navLinkActive}`} href="">
                    Global Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${s.navLink}`} href="">
                    Your Feed
                  </a>
                </li>
              </ul>
            </div>

            {ARTICLES.articles.map((article) => (
              <div key={article.slug} className={s.articlePreview}>
                <div className={s.articleMeta}>
                  <a href={`/profile/${article.author.username}`}>
                    <img
                      src={article.author.image}
                      alt={article.author.username}
                    />
                  </a>
                  <div className={s.info}>
                    <a
                      href={`/profile/${article.author.username}`}
                      className={s.author}
                    >
                      {article.author.username}
                    </a>
                    <span className={s.date}>{article.createdAt}</span>
                  </div>
                  <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {article.favoritesCount}
                  </button>
                </div>
                <a href={`/article/${article.slug}`} className="preview-link">
                  <h1>{article.title}</h1>
                  <p>{article.description}</p>
                  <span>Read more...</span>
                  <ul className="tag-list">
                    {article.tagList.map((tag) => (
                      <li
                        key={tag}
                        className="tag-default tag-pill tag-outline"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </a>
              </div>
            ))}
            {/* ПАГИНАЦИЯ */}
            <ul className="pagination">
              {/* {entries.map((entry) => (
                <li key={entry.slug} className="page-item active">
                  <a className="page-link" href="">
                    {entry.slug}
                  </a>
                </li>
              ))} */}
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="">
                  2
                </a>
              </li>
            </ul>
          </div>

          <div className={s.asideFilterContent}>
            <div className="sidebar">
              <p>Popular Tags</p>

              <div className={s.tagList}>
                <a href="" className="tag-pill tag-default">
                  programming
                </a>
                <a href="" className="tag-pill tag-default">
                  javascript
                </a>
                <a href="" className="tag-pill tag-default">
                  emberjs
                </a>
                <a href="" className="tag-pill tag-default">
                  angularjs
                </a>
                <a href="" className="tag-pill tag-default">
                  react
                </a>
                <a href="" className="tag-pill tag-default">
                  mean
                </a>
                <a href="" className="tag-pill tag-default">
                  node
                </a>
                <a href="" className="tag-pill tag-default">
                  rails
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

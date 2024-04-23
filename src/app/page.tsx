import Image from "next/image";
import s from "./page.module.scss";

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
              <ul className={`${s.navContent} ${s.navPills} ${s.outlineActive}`}>
                <li className="nav-item">
                  <a className={`${s.navLink} ${s.navLinkActive}`}  href="">
                    Global Feed
                  </a>
                </li>
                <li className="nav-item">
                  <a className= {`${s.navLink}`} href="">
                    Your Feed
                  </a>
                </li>
              </ul>
            </div>

            <div className={s.articlePreview}>
              <div className={s.articleMeta}>
                <a href="/profile/eric-simons">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className={s.info}>
                  <a href="/profile/eric-simons" className={s.author}>
                    Eric Simons
                  </a>
                  <span className={s.date}>January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a
                href="/article/how-to-build-webapps-that-scale"
                className="preview-link"
              >
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">
                    realworld
                  </li>
                  <li className="tag-default tag-pill tag-outline">
                    implementations
                  </li>
                </ul>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="/profile/albert-pai">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div className="info">
                  <a href="/profile/albert-pai" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="/article/the-song-you" className="preview-link">
                <h1>
                  The song you won{`'`}t ever stop singing. 
                  {/* No matter how hard
                  you try. */}
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">
                    realworld
                  </li>
                  <li className="tag-default tag-pill tag-outline">
                    implementations
                  </li>
                </ul>
              </a>
            </div>

            <ul className="pagination">
              <li className="page-item active">
                <a className="page-link" href="">
                  1
                </a>
              </li>
              <li className="page-item">
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

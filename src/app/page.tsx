// "use client";
import Image from "next/image";
import s from "./page.module.scss";
import { ARTICLES, TAGS } from "@/utils/constants/mocks";
import { Article } from "@/components/articleMini/article";
import { Tags } from "@/components/tags/tags";
import { Pagination } from "@/components/pagination/pagination";
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

export default function Home(props: any) {
  const tagFilters = props.searchParams;
// console.log(tagFilters);
  
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
              <Article key={article.slug} article={article} />
            ))}
            {/* ПАГИНАЦИЯ */}
            <Pagination/>
          </div>

          <div className={s.asideFilterContent}>
            <Tags tags={TAGS} />
          </div>
          {/* <Tags key={tags} */}
        </div>
      </div>
    </div>
  );
}
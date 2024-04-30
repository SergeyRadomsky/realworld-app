import s from "./article.module.scss";
import { IArticle } from "@/utils/types/article-types";
import { FC } from "react";

interface articleProps {
  article: IArticle;
  // comment: IComment;
}

export const Article: FC<articleProps> = ({ article }) => {
  const {
    slug,
    title,
    description,
    body,
    tagList,
    createdAt,
    updatedAt,
    favorited,
    favoritesCount,
    author,
  } = article;

  return (
    <div key={article.slug} className={s.articlePreview}>
      <div className={s.articleMeta}>
        <div className={s.nameTime}>
          <a href={`/profile/${article.author.username}`}>
            <img src={article.author.image} alt={article.author.username} />
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
        </div>
        <button className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnSmall}`}>
          {/* <button className="btn btn-outline-primary btn-sm pull-xs-right"> */}
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href={`/article/${article.slug}`} className="preview-link">
        <h1 className={s.title}>{article.title}</h1>
        <p className={s.description}>{article.description}</p>
        <div className={s.articleTags}>
          <span>Read more...</span>
          <ul className={s.tagList}>
            {article.tagList.map((tag) => (
              <li key={tag} className={`${s.tagDefault} ${s.tagPill} ${s.tagOutline}`}>
              {/* <li key={tag} className={`"tag-default tag-pill tag-outline"`}> */}
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
};

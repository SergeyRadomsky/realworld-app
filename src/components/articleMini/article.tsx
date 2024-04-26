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
  );
};

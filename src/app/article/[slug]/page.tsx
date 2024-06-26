"use client";

import s from "./article.module.scss";
import { Comment } from "@/components/comment/comment";
import { ARTICLES } from "@/utils/constants/mocks";
import { COMMENTS } from "@/utils/constants/mocks";

type Props = {
  params: {
    slug: string;
  };
};

type ArticleProps = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
  };
};

export default function Article({ params: { slug } }: Props) {
  const selectedArticle = ARTICLES.articles.find(
    (article) => article.slug === slug
  );

  if (!selectedArticle) {
    return <div>Статья не найдена</div>;
  }

  const {
    title,
    description,
    body,
    tagList,
    createdAt,
    updatedAt,
    favorited,
    favoritesCount,
    author,
  } = selectedArticle;

  return (
    <>
      {/* <div>статья ${title}</div> */}
      <div className="article-page">
        <div className={s.banner}>
          <div className={s.container}>
            <h1>{title}</h1>
            <div className="article-meta">
              <div className={s.nameDate}>
                <a href={`/profile/${author.username}`}>
                  <img src={author.image} />
                </a>
                <div className={s.info}>
                  <a href={`/profile/${author.username}`} className="author">
                    {author.username}
                  </a>
                  <span className="date">{createdAt}</span>
                </div>
              </div>
              <div className={s.bannerBtnGroup}>
                <div className={s.blockBtn}>
                  <button className={`${s.btn} ${s.btnUpperLine}`}>
                    <i className="ion-plus-round"></i>
                    &nbsp; {author.following ? "Follow" : "Unfollow"}{" "}
                    {author.username}
                    <span className="counter"></span>
                  </button>
                  <button
                    className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnUpperLine}`}
                  >
                    <i className="ion-heart"></i>
                    &nbsp; Favorite Post{" "}
                    <span className="counter">({favoritesCount})</span>
                  </button>
                </div>
                {/* <div className={s.blockBtn}>
                  <button
                    className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnUpperLine}`}
                  >
                    <i className="ion-edit"></i> Edit Article
                  </button>
                  <button
                    className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnUpperLine}`}
                  >
                    <i className="ion-trash-a"></i> Delete Article
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={s.container}>
          <div className="row article-content">
            <div className="col-md-12">
              <p>{body}</p>
              {/* <h2 id="introducing-ionic">{description}</h2>
              <p>
                It{`'`}s a great solution for learning how other frameworks
                work.
              </p> */}

              <ul className={s.tagList}>
                {tagList.map((tag) => (
                  <li
                    key={tag}
                    className={`${s.tagDefault} ${s.tagPill} ${s.tagOutline}`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr />

          <div className="article-actions">
            <div className="article-meta">
              <div className={s.nameDate}>
                <a href="profile.html">
                  <img src={author.image} />
                </a>
                <div className={s.info}>
                  <a href="" className="author">
                    {author.username}
                  </a>
                  <span className="date">{createdAt}</span>
                </div>
                <div className={s.blockBtn}>
                  <button className={`${s.btn} ${s.btnSmall}`}>
                    <i className="ion-plus-round"></i>
                   Follow {author.username}
                  </button>
                  &nbsp;
                  <button
                    className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnSmall}`}
                  >
                    <i className="ion-heart"></i>
                    Favorite Article{" "}
                    <span className="counter">(29)</span>
                  </button>
                </div>
                {/* <div className={s.unOwnerArticle}>
                <button
                  className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnSmall}`}
                >
                  <i className="ion-edit"></i> Edit Article
                </button>
                <button
                  className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnSmall}`}
                >
                  <i className="ion-trash-a"></i> Delete Article
                </button>
              </div> */}
              </div>
            </div>
          </div>

          {/* ПОЛЕ ДЛЯ НАПИСАНИЯ КОММЕНТАРИЯ */}
          <div className="row">
            <form className={`${s.card} ${s.cardForm}`}>
              <div className="card-block">
                {/* <fieldset className={`${s.formGroup} ${s.formEl}`}> */}
                <textarea
                  className={s.formControl}
                  // rows="8"
                  placeholder="Write  a comment..."
                ></textarea>
                {/* </fieldset> */}
              </div>
              <div className={s.cardAfterComment}>
                <img src={author.image} className="comment-author-img" />
                <button
                  className={`${s.btn} ${s.btnOutLinePrimary} ${s.btnSmall}`}
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
          {COMMENTS.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}

          {/* КАРТОЧКА НАПИСАННОГО КОММЕНТАРИЯ */}
          {/* <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="/profile/author" className="comment-author">
                    <img
                      src="http://i.imgur.com/Qr71crq.jpg"
                      className="comment-author-img"
                    />
                  </a>
                  &nbsp;
                  <a href="/profile/jacob-schmidt" className="comment-author">
                    Jacob Schmidt
                  </a>
                  <span className="date-posted">Dec 29th</span>
                  <span className="mod-options">
                    <i className="ion-trash-a"></i>
                  </span>
                </div>
              </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

// interface ArticleProps {
//   params: { slug: string }
// }

// export async function generateMetadata({
//   params,
// }: ArticleProps): Promise<Metadata> {
//   // const data = await getArticle({ slug: params.slug })

//   return data ? { title: data.title } : {}
// }

// const articlePage = async ({ params }: ArticleProps) => {
//   // const article = await getArticle({ slug: params.slug })
//   if (!article) {
//     return redirect('/')
//   }

// export default function Page() {
//   return (
//     <div></div>
//   );
// }

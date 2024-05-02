import { ARTICLES } from "@/utils/constants/mocks";
import s from "./style.module.scss";
import { Article } from "@/components/articleMini/article";
import { Pagination } from "@/components/pagination/pagination";

type Props = {
  params: {
    username: string;
  };
};

type ProfileProps = {
  profile: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
};

export default function Profile({ params: { username } }: Props) {
  const selectedProfile = ARTICLES.articles.find(
    (article) => article.author.username === username
  );

  if (!selectedProfile) {
    return <div>Пользователь {username} не найден</div>;
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
  } = selectedProfile;

  return (
    <div className="profile-page">
      <div className={s.userInfo}>
        <div className={s.container}>
          <div className="row">
            <div className={s.flexContainer}>
              <img src="http://i.imgur.com/Qr71crq.jpg" className={s.userImg} />
              <h4>{author.username}</h4>
              {/* <p>
                Cofounder @GoThinkster, lived in Aol{`'`}s HQ for a few months,
                kinda looks like Peeta from the Hunger Games
              </p> */}
              <div className={s.btnProfile}>
                <button className={`${s.btn} ${s.actionBtn} ${s.formEl}`}>
                  Follow Eric Simons
                </button>
              </div>
              {/* <button className="btn btn-sm btn-outline-secondary action-btn">
                Edit Profile Settings
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <div className="row">
          <div className={s.flexContainer}>


            <div className={s.feedToggle}>
              <ul
                className={`${s.navContent} ${s.navPills} ${s.outlineActive}`}
              >
                <li className="nav-item">
                  <a className={`${s.navLink} ${s.navLinkActive}`} href="">
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`${s.navLink}`} href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            {ARTICLES.articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
            {/* ПАГИНАЦИЯ */}
            <Pagination/>
            
            {/* <div className="article-preview">
              <div className="article-meta">
                <a href="/profile/eric-simons">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="/profile/eric-simons" className="author">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a
                href="/article/how-to-buil-webapps-that-scale"
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
            </div> */}

            {/* <div className="article-preview">
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
                  The song you won{`'`}t ever stop singing. No matter how hard
                  you try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

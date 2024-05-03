import { IComment } from "@/utils/types/comment-types";
import { FC } from "react";
import s from "./comment.module.scss";

interface CommentProps {
  comment: IComment;
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  const { id, createdAt, updatedAt, body, author } = comment;

  return (
    <div className={s.card}>
      <div className="card-block">
        <p className={s.cardText}>{body}</p>
      </div>
      <div className={s.cardCommenntInfo}>
        <a href={`/profile/${author.username}`} className="comment-author">
          <img src={author.image} className="comment-author-img" />
        </a>
        &nbsp; &nbsp;
        <a href="/profile/jacob-schmidt" className="comment-author">
          {author.username}
        </a>
        &nbsp;
        <span className="date-posted">{createdAt}</span>
      </div>
    </div>
  );
};

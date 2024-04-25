import { IComment } from "@/utils/types/comment-types";
import { FC } from "react";

interface CommentProps {
  comment: IComment;
}

export const Comment: FC<CommentProps> = ({ comment }) => {
  const { id, createdAt, updatedAt, body, author } = comment;

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">
          {body}
        </p>
      </div>
      <div className="card-footer">
        <a href={`/profile/${author.username}`} className="comment-author">
          <img
            src={author.image}
            className="comment-author-img"
          />
        </a>
        &nbsp;
        <a href="/profile/jacob-schmidt" className="comment-author">
          {author.username}
        </a>
        <span className="date-posted">{createdAt}</span>
      </div>
    </div>
  );
};

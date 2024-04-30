import React, { FC } from "react";
import s from "./style.module.scss";

export const Pagination: FC = () => {
  return (
    <ul className={s.pagination}>
      {/* {entries.map((entry) => (
      <li key={entry.slug} className="page-item active">
        <a className="page-link" href="">
          {entry.slug}
        </a>
      </li>
    ))} */}
      <li className={`${s.pageItem} ${s.active}`}>
        <a className={s.pageLink} href="">
          1
        </a>
      </li>
      <li className={`${s.pageItem} ${s.active}`}>
        <a className={s.pageLink} href="">
          2
        </a>
      </li>
    </ul>
  );
};

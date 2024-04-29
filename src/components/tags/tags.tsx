"use client";
import s from "./tags.module.scss";
import { IArticle } from "@/utils/types/article-types";
import { Itags } from "@/utils/types/tags-types";
import { useRouter, useSearchParams } from "next/navigation";
import { ARTICLES, TAGS } from "@/utils/constants/mocks";

import { FC } from "react";

interface tagsProps {
  tags: Itags;
}

export const Tags: FC<tagsProps> = ({ tags }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // console.log(searchParams.getAll("tag"));
  // ['programming', 'shit']

  const onTagClick = (tag: string) => {
    const currentTags = searchParams.getAll("tag");
    // console.log(currentTags);
    // ['programming', 'shit']

    // Создаем новый экземпляр URLSearchParams для манипуляции параметрами
    const newSearchParams = new URLSearchParams(searchParams);
    // console.log(newSearchParams);
    // URLSearchParams {size: 2}
    if (!currentTags.includes(tag)) {
      // Если тега нет, добавляем его
      newSearchParams.append("tag", tag);
      router.push(newSearchParams.toString());
    } else {
      // Если тег уже есть, удаляем все теги и добавляем текущий заново
      const filteredSearchParams = currentTags.map((currentTag) => {
        if (tag === currentTag) {
          newSearchParams.delete("tag", currentTag);
          console.log(newSearchParams.toString());
        }
        router.push(newSearchParams.toString());
      });
    }
  };

  return (
    <div className={s.sidebar}>
      <p>Popular Tags</p>
      <div className={s.tagList}>
        {tags.tags.map((tag, id) => (
          <a
            key={id}
            href={`/?${searchParams.toString()}`}
            onClick={(e) => {
              e.preventDefault();
              onTagClick(tag);
            }}
            className={`${s.tagPill} ${s.tagDefault}`}
          >
            {/* <a key={id} href={`/${tag}`} onClick={() => onTagClick(tag)} className="tag-pill tag-default"> */}
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

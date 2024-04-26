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
  console.log(searchParams);

  // console.log(searchParams.getAll('tag'));

  // const onTagClick = (tag: string) => {
  //   const currentTags = searchParams.getAll('tag');

  //   // Создаем новый экземпляр URLSearchParams для манипуляции параметрами
  //   const newSearchParams = new URLSearchParams(searchParams);

  //   if (!currentTags.includes(tag)) {
  //     // Если тега нет, добавляем его
  //     newSearchParams.append('tag', tag);
  //   } else {
  //     // Если тег уже есть, удаляем все теги и добавляем текущий заново
  //     newSearchParams.delete('tag');
  //     currentTags.forEach(currentTag => {
  //       if (currentTag !== tag) {
  //         newSearchParams.append('tag', currentTag);
  //       }
  //     });
  //   }

  //   // Обновляем URL без перезагрузки страницы
  //   router.push({
  //     pathname: searchParams.toString(),
  //     search: ?${newSearchParams.toString()}
  //   });
  // };

  const onTagClick = (tag: string) => {
    const currentTags = searchParams.getAll("tag");
    // console.log(currentTags);

    // // Проверяем, есть ли уже такой тег в параметрах запроса
    // if (!currentTags.includes(tag)) {
    //   // Если нет, добавляем его
    //   searchParams.append('tag', tag);
    // } else {
    //   // Если есть, удаляем его
    //   searchParams.delete('tag');
    //   searchParams.append('tag', tag);
    // }
    // // Обновляем URL без перезагрузки страницы
  };

  return (
    <div className="sidebar">
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
            className="tag-pill tag-default"
          >
            {/* <a key={id} href={`/${tag}`} onClick={() => onTagClick(tag)} className="tag-pill tag-default"> */}
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

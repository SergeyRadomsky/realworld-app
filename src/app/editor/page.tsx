"use client";

import { useState } from "react";
import s from "./style.module.scss";

export default function Editor() {
  const [tags, setTags] = useState([]);

  const handleInputChange = (e: any) => {
    const inputText = e.target.value;
    const inputTags = inputText
      .split(" ")
      .filter((tag: any) => tag.trim() !== "");
    // const inputTags = inputText.split("");
    setTags(inputTags);
  };

  return (
    <div className="editor-page">
      <div className={`${s.container} ${s.page}`}>
        <div className="row">
          <div className={s.flexContainer}>
            {/* <ul className="error-messages">
              <li>That title is required</li>
            </ul> */}

            <form>
              {/* <fieldset> */}
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  type="text"
                  className={s.formControl}
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  type="text"
                  className={s.formControl}
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <textarea
                  className={s.formControl}
                  // rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  type="text"
                  className={s.formControl}
                  placeholder="Enter tags"
                  onChange={handleInputChange}
                />
                <div className={s.tagsList}>
                  {tags.map((tag, index) => (
                    <span key={index} className={s.tagDefault}>
                      {tag}
                    </span>
                  ))}
                </div>
              </fieldset>
              <button
                className={`${s.btn} ${s.btnLg} ${s.formEl}`}
                type="button"
              >
                Publish Article
              </button>
              {/* </fieldset> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

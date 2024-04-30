import s from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <a href="/" className={s.logoFont}>
          conduit
        </a>
        <span className={s.attribution}>
          An interactive learning project from{" "}
          <a className={s.thinkster} href="https://thinkster.io">Thinkster</a>. Code &amp; design
          licensed under MIT.
        </span>
      </div>
    </footer>
  );
}

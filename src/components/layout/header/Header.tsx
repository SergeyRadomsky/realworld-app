import s from './style.module.scss';

export default function Header() {
  return (
<header>
      {/* header без аутентифакации */}
      <nav className={`${s.navbar} ${s.navbarLight}`}>
        <div className={s.container}>
          <a className={s.navbarBrand} href="/">
            conduit
          </a>
          <ul className={`${s.nav} ${s.navbarNav} ${s.pullXsRight}`}>
            <li className={s.navItem}>
              <a className={` ${s.navLink} ${s.navLinkActive}`} href="/">
                Home
              </a>
            </li>
            <li className={s.navItem}>
              <a className={s.navLink} href="/sign-in">
                Sign in
              </a>
            </li>
            <li className={s.navItem}>
              <a className={s.navLink} href="/sign-up">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <header>
//header с аутентифакацией 
<nav className="navbar navbar-light">
  <div className="container">
    <a className="navbar-brand" href="/">conduit</a>
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <!-- Add "active" className when you're on that page" -->
        <a className="nav-link active" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/editor"> <i className="ion-compose"></i>&nbsp;New Article </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/settings"> <i className="ion-gear-a"></i>&nbsp;Settings </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/profile/eric-simons">
          <img src="" className="user-pic" />
          Eric Simons
        </a>
      </li>
    </ul>
  </div>
</nav>
<div>
  <h1>Conduit</h1>
  <h2>A place to share your knowledge</h2>
</div>
</header> */}
    </header>
  );
}

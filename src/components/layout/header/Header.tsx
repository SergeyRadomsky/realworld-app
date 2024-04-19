export default function Header() {
  return (
    <section>
      <header>
        {/* header без аутентифакации */}
        <nav>
          <div>
            <a href="/">Conduit</a>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Sign in</a>
              </li>
              <li>
                <a href="/">Sign up</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
{/* <header>
//header с аутентифакацией 
<nav>А
  <div>
    <a href="./">Conduit</a>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">New Article</a>
      </li>
      <li>
        <a href="/">Settings</a>
      </li>
      <li>
        <a href="/">
          <img src="" alt="profile-photo" />
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
    </section>
  );
}

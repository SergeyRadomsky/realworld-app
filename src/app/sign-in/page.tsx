import s from "./style.module.scss";

export default function SignIn() {
  return (
    <div className={s.authPage}>
      <div className={`${s.container} ${s.page}`}>
        <div className="row">
          <div className={s.flexContainer}>
            <h1 className={s.signIn}>Sign in</h1>
            <p className={s.signUp}>
              <a href="/register">Need an account?</a>
            </p>

            {/* <ul className="error-messages">
              <li>That email is already taken</li>
            </ul> */}

            <form>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formСontrol}
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formСontrol}
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className={`${s.btn} ${s.btnLg} ${s.formEl}`}>
              {/* <button className="btn btn-lg btn-primary pull-xs-right"> */}
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

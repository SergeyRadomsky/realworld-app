import s from "./style.module.scss";

export default function SignUp() {
  return (
    <div className={s.authPage}>
      <div className={`${s.container} ${s.page}`}>
        <div className="row">
          <div className={s.flexContainer}>
            <h1 className={s.signUp}>Sign up</h1>
            <p className={s.signIn}>
              <a href="/login">Have an account?</a>
            </p>
            {/* 
            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul> */}

            <form>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formControl}
                  type="text"
                  placeholder="Username"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formControl}
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formControl}
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button className={`${s.btn} ${s.btnLg} ${s.formEl}`}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

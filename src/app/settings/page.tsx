import s from "./style.module.scss";

export default function Settings() {
  return (
    <div className={s.settingsPage}>
      <div className={`${s.container} ${s.page}`}>
        <div className="row">
          <div className={s.flexContainer}>
            <h1 className={s.yourSettings}>Your Settings</h1>

            {/* <ul className="error-messages">
              <li>That name is required</li>
            </ul> */}

            <form>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formСontrol}
                  type="text"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <input
                  className={s.formСontrol}
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className={`${s.formGroup} ${s.formEl}`}>
                <textarea
                  className={s.formСontrol}
                  // rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
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
                  placeholder="New Password"
                />
              </fieldset>
              <button className={`${s.btn} ${s.btnLg} ${s.formEl}`}>
                Update Settings
              </button>
            </form>
            <hr />
            <p className={s.register}>
              <a href="/register">Need an account?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

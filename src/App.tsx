function App() {
  const formInputs = formDetails.map((detail, i) => {
    return (
      <>
        <li key={i}>
          <label htmlFor={detail} className="inline-block w-[50px] text-right">
            {detail}:
          </label>
          <input type="text" id={detail} name={detail} className="w-[300px]" />
        </li>
      </>
    );
  });

  return (
    <>
      <form
        action="#"
        method="post"
        className="mx-auto w-full max-w-[400px] rounded-lg border border-slate-400 p-4"
      >
        <ul className="space-y-4">
          {formInputs}
          <li>
            <label htmlFor="msg" className="inline-block w-[50px] text-right">
              Message:
            </label>
            <textarea
              id="msg"
              name="user_message"
              className="w-[300px] align-top"
            ></textarea>
          </li>
          <li className="overflow-hidden">
            <button type="submit" className="truncate pl-[50px]">
              Sendyourmessage
            </button>
          </li>
        </ul>
        <section>
          <h2>Contact information</h2>
          <fieldset className="relative border border-slate-400">
            <legend className="absolute right-0 top-0">Title</legend>
            <ul>
              <li>
                <label htmlFor="title_1">
                  <input type="radio" id="title_1" name="title" value="A" />
                  Ace
                </label>
              </li>
              <li>
                <label htmlFor="title_2">
                  <input type="radio" id="title_2" name="title" value="K" />
                  King
                </label>
              </li>
              <li>
                <label htmlFor="title_3">
                  <input type="radio" id="title_3" name="title" value="Q" />
                  Queen
                </label>
              </li>
            </ul>
          </fieldset>
          <p>
            <label htmlFor="name">
              <span>Name: </span>
              <strong>
                <span aria-label="required">*</span>
              </strong>
            </label>
            <input type="text" id="name" name="username" required />
          </p>
          <p>
            <label htmlFor="mail">
              <span>Email: </span>
              <strong>
                <span aria-label="required">*</span>
              </strong>
            </label>
            <input type="email" id="mail" name="usermail" required />
          </p>
          <p>
            <label htmlFor="pwd">
              <span>Password: </span>
              <strong>
                <span aria-label="required">*</span>
              </strong>
            </label>
            <input type="password" id="pwd" name="password" required />
          </p>
        </section>
      </form>
    </>
  );
}

const formDetails = ["Name", "Email", "Password"];

export default App;

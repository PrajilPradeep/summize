import logo from "../assets/logo.svg";
function PageHeader() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="summize_logo" className="w-44 object-contain" />
        <button
          type="button"
          onClick={() => {
            console.log("Button clicked");
            window.open("https://github.com/PrajilPradeep/summize");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange-gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Clearer, concise reading with Summize: your personal article summarizer.
      </h2>
    </header>
  );
}

export default PageHeader;

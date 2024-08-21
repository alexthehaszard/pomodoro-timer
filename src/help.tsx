import "./App.css";

const Help = () => {
  return (
    <div className="help-wrapper">
      <div className="help">
        <h3>What is a Pomodoro Timer?</h3>
        <a href="./">X</a>
        <p>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. It uses a kitchen timer to break
          work into intervals, typically 25 minutes in length, separated by
          short breaks. Each interval is known as a pomodoro, from the Italian
          word for tomato, after the tomato-shaped kitchen timer Cirillo used as
          a university student.
        </p>
        <footer>
          Definition from{" "}
          <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
            Wikipedia
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Help;

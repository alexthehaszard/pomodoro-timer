import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/timer";
import { formatMinutes, formatSeconds } from "./utils/utils";

function App() {
  const [sessionTime, setSessionTime] = useState(25 * 60 * 1000);
  const [breakTime, setBreakTime] = useState(5 * 60 * 1000);
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(sessionTime);
  const [inSession, setInSession] = useState(true);
  const [isOn, setIsOn] = useState(false);
  const [primaryColour, setPrimaryColour] = useState("#2a2a2a");
  const [secondaryColour, setSecondaryColour] = useState("#ffffff");

  /*
    This useEffect will run when the component is mounted, and when
    the value of time in it's state is changed.
    ^ this is my understanding of it!! it's very hacky though.

    It will then run a loop using setInterval which will calculate
    the time to show, by using Date.now() and the time taken when the
    timer was started.
    This loop runs every 100ms, so that the timer will always be within
    100ms of accuracy.
  */
  useEffect(() => {
    setTime(inSession ? sessionTime : breakTime);
    if (isOn) {
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        setTime((inSession ? sessionTime : breakTime) - elapsed);
        if (elapsed > (inSession ? sessionTime : breakTime)) {
          setStartTime(Date.now());
          if (inSession) setTime(breakTime);
          else setTime(sessionTime);
          setInSession(!inSession);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [startTime, isOn, inSession, breakTime, sessionTime]);

  const start = () => {
    setStartTime(Date.now());
    setIsOn(true);
  };

  return (
    <>
      <header
        style={{
          color: secondaryColour,
          display: isOn ? "none" : "flex",
        }}
      >
        <h2>Pomodoro Timer</h2>
        <button>?</button>
      </header>
      <main
        style={{
          backgroundColor: inSession ? primaryColour : secondaryColour,
          color: inSession ? secondaryColour : primaryColour,
        }}
      >
        <Timer
          style={{ display: isOn ? "initial" : "none" }}
          inSession={inSession}
          time={time}
          primaryColour={primaryColour}
          secondaryColour={secondaryColour}
        ></Timer>
        <div className="setup" style={{ display: isOn ? "none" : "flex" }}>
          <div className="counters">
            <h3>Working Time</h3>
            <div className="counter">
              <input
                onFocus={(m) => m.target.select()}
                type="number"
                value={formatMinutes(sessionTime)}
                onChange={(v) => {
                  setSessionTime(
                    parseInt(formatSeconds(sessionTime)) * 1000 +
                      parseInt(v.target.value) * 60000
                  );
                }}
              />
              min
              <input
                onFocus={(m) => m.target.select()}
                type="number"
                value={formatSeconds(sessionTime)}
                onChange={(v) => {
                  setSessionTime(
                    parseInt(formatMinutes(sessionTime)) * 60000 +
                      parseInt(v.target.value) * 1000
                  );
                }}
              />
              sec
            </div>
          </div>
          <div className="counters">
            <h3>Break Time</h3>
            <div className="counter">
              <input
                onFocus={(m) => m.target.select()}
                type="number"
                value={formatMinutes(breakTime)}
                onChange={(v) => {
                  setBreakTime(
                    parseInt(formatSeconds(breakTime)) * 1000 +
                      parseInt(v.target.value) * 60000
                  );
                }}
              />
              min
              <input
                onFocus={(m) => m.target.select()}
                type="number"
                value={formatSeconds(breakTime)}
                onChange={(v) => {
                  setBreakTime(
                    parseInt(formatMinutes(breakTime)) * 60000 +
                      parseInt(v.target.value) * 1000
                  );
                }}
              />
              sec
            </div>
          </div>
          <div>
            <h4>Choose your colours:</h4>
            <div className="colour-picker">
              <input
                type="color"
                value={primaryColour}
                onChange={(e) => setPrimaryColour(e.target.value)}
              />
              <input
                type="color"
                value={secondaryColour}
                onChange={(e) => setSecondaryColour(e.target.value)}
              />
            </div>
          </div>
          <button onClick={() => start()}>Start</button>
        </div>
      </main>
      <footer
        style={{
          color: secondaryColour,
          display: isOn ? "none" : "initial",
        }}
      >
        <p>
          Made by{" "}
          <a style={{ color: secondaryColour }} href="https://alexhaszard.dev">
            Alex Haszard
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;

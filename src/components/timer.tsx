import { formatMinutes, formatSeconds } from "../utils/utils";

function Timer(props: {
  style: React.CSSProperties | undefined;
  inSession: boolean;
  time: number;
  primaryColour: string;
  secondaryColour: string;
}) {
  return (
    <div style={props.style}>
      <h3 style={{ textAlign: "center" }}>
        {props.inSession ? "Work" : "Break"}
      </h3>
      <h1>
        {formatMinutes(props.time)}:{formatSeconds(props.time)}
      </h1>
    </div>
  );
}

export default Timer;

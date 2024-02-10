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
      <h1
        style={
          {
            // color: props.inSession ? props.secondaryColour : props.primaryColour,
          }
        }
      >
        {formatMinutes(props.time)}:{formatSeconds(props.time)}
      </h1>
    </div>
  );
}

export default Timer;

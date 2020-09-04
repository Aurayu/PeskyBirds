import React from "react"

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

const Countdown = () => {
  const deadline = new Date(Date.parse('September 05 2020 10:00:00 UTC+0100'));
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(deadline));

  React.useEffect(() => {
    const timer =
      timeRemaining.total > 0 && setInterval(() => setTimeRemaining(getTimeRemaining(deadline)), 1000);
    return () => clearInterval(timer);
  }, [timeRemaining]);

  const countdown = <div id="clockdiv">
    <div style={{
      display: "block"
    }}>
      <p>Season Two launches in:</p>
    </div>
    <div>
      <span className="days time">{timeRemaining.days}</span>
      <div className="smalltext">Days</div>
    </div>
    <div>
      <span className="hours time">{ ('0' + timeRemaining.hours).slice(-2) }</span>
      <div className="smalltext">Hours</div>
    </div>
    <div>
      <span className="minutes time">{ ('0' + timeRemaining.minutes).slice(-2) }</span>
      <div className="smalltext">Minutes</div>
    </div>
    <div>
      <span className="seconds time">{ ('0' + timeRemaining.seconds).slice(-2) }</span>
      <div className="smalltext">Seconds</div>
    </div>
  </div>

  return countdown
}

export default Countdown
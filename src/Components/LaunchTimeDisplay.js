import Countdown from 'react-countdown';

const LaunchTimeDisplay = ({ time }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return completed ? (
      <span>Launched at {time}</span>
    ) : (
      <>
        <div className="grid grid-rows-2 grid-cols-5  gap-3 items-center">
          <div className="row-span-2 text-2xl font-bold">T -</div>
          <div>{days}</div>
          <div>{hours}</div>
          <div>{minutes}</div>
          <div>{seconds}</div>
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes</div>
          <div>seconds</div>
        </div>
      </>
    );
  };
  return <Countdown date={time} renderer={renderer} />;
};

export default LaunchTimeDisplay;

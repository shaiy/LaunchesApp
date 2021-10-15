import Countdown from 'react-countdown';
import { Text } from '@chakra-ui/react';

const LaunchTimeDisplay = ({ time }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return completed ? (
      <Text fontSize="lg" fontWeight="medium">
        Launched at {time}
      </Text>
    ) : (
      <>
        <div>
          <div>T -</div>
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

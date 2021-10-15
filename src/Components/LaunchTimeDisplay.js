import Countdown from 'react-countdown';
import { Text, GridItem, Grid, Center } from '@chakra-ui/react';

const LaunchTimeDisplay = ({ time }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return completed ? (
      <Text fontSize="lg" fontWeight="medium" marginTop="1rem">
        Launched at {time}
      </Text>
    ) : (
      <>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          height="4rem"
          fontWeight="bold"
          marginTop="1rem"
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Center height="full">T -</Center>
          </GridItem>
          <GridItem>{days}</GridItem>
          <GridItem>{hours}</GridItem>
          <GridItem>{minutes}</GridItem>
          <GridItem>{seconds}</GridItem>
          <GridItem fontWeight="light">Days</GridItem>
          <GridItem fontWeight="light">Hours</GridItem>
          <GridItem fontWeight="light">Minutes</GridItem>
          <GridItem fontWeight="light">Seconds</GridItem>
        </Grid>
      </>
    );
  };
  return <Countdown date={time} renderer={renderer} />;
};

export default LaunchTimeDisplay;

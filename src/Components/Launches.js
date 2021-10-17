import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Switch, Text, Spinner, useColorMode, Button, Icon } from '@chakra-ui/react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

import LaunchCard from './LaunchCard';
import { getIsLoading, getIsError } from '../store/statusIndication';
import { getLaunches, getShowFutureLaunches, toggleFutureLaunchesSelector, fetchLaunches } from '../store/launches';

const Launches = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();

  const futureLaunches = useSelector(getShowFutureLaunches);
  const launches = useSelector(getLaunches);
  const loading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  const handleFutureLaunches = () => {
    dispatch(toggleFutureLaunchesSelector(!futureLaunches));
  };

  useEffect(() => {
    dispatch(fetchLaunches(futureLaunches));
  }, [futureLaunches]);

  console.log(`loading: ${loading}`);
  return isError ? (
    <div className="text-white text-center">Something went wrong...</div>
  ) : (
    <Flex flexFlow="column wrap">
      <Flex alignSelf="center" flexFlow="row">
        <Text fontSize="xl" fontWeight="bold" mr="1rem">
          Future Launches{' '}
        </Text>
        <Switch isChecked={futureLaunches} colorScheme="whatsapp" size="lg" onChange={handleFutureLaunches} />
      </Flex>
      <Button onClick={toggleColorMode} maxW="10rem" alignSelf="center" margin="1rem">
        <Icon as={colorMode === 'light' ? MdDarkMode : MdOutlineLightMode} />
      </Button>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="red.500"
          size="xl"
          alignSelf="center"
          mt="10rem"
        />
      ) : (
        <Flex flexFlow="row wrap" justifyContent="center">
          {launches.map((launch) => (
            <div key={launch.id}>
              <LaunchCard
                id={launch.id}
                name={launch.name}
                missionDescription={launch.mission ? launch.mission.description : 'No description'}
                imageUrl={launch.image}
                status={launch.status.abbrev}
                slug={launch.slug}
                launchTime={launch.window_end}
              />
            </div>
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default Launches;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LaunchCard from './LaunchCard';
import axios from 'axios';
import { Flex, Switch, Text, Spinner, useColorMode, Button, Icon } from '@chakra-ui/react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Launches = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const dispatch = useDispatch();

  const futureLaunches = useSelector((state) => state.launches.showFutureLaunches);
  const launches = useSelector((state) => state.launches.launches);
  const loading = useSelector((state) => state.status.isLoading);
  const isError = useSelector((state) => state.status.isError);

  const handleFutureLaunches = () => {
    dispatch({ type: 'toggleFutureLaunches', payload: !futureLaunches });
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'status/setLoading', payload: true });
      const launchesType = futureLaunches ? 'upcoming' : 'previous';
      try {
        const result = await axios(`https://lldev.thespacedevs.com/2.2.0/launch/${launchesType}/`);
        dispatch({ type: 'launches/setLaunches', payload: result.data.results });
      } catch (error) {
        console.log(error);
        dispatch({ type: 'status/setError', payload: true });
      } finally {
        dispatch({ type: 'status/setLoading', payload: false });
      }
    };
    fetchData();
  }, [dispatch, futureLaunches]);

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
                missionDescription={launch.mission.description}
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

import ShareButton from './ShareButton';
import StatusIndicator from './StatusIndicator';
import LaunchTimeDisplay from './LaunchTimeDisplay';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';

const LaunchCard = ({ name, status, missionDescription, imageUrl, slug, launchTime }) => {
  const buildLink = () => `https://go4liftoff.com/launch/${slug}`;
  return (
    <Flex width="40rem" height="20rem" bgColor="gray.700" margin="1rem" borderRadius="lg" opacity="90%">
      <Image src={imageUrl} alt={name} width="12rem" fit="cover" borderLeftRadius="lg" />
      <Flex textColor="white" flexDirection="column" padding="0.5rem">
        <Flex justifyContent="space-between" flex="1" marginTop="0.5rem" maxHeight="4rem">
          <Heading size="md">{name}</Heading>
          <StatusIndicator status={status} />
        </Flex>
        <Text noOfLines={3} height="4.5rem">
          {missionDescription}
        </Text>
        <LaunchTimeDisplay time={launchTime} />
        <ShareButton link={buildLink()} />
      </Flex>
    </Flex>
  );
};

export default LaunchCard;

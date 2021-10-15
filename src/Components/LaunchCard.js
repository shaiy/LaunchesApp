import ShareButton from './ShareButton';
import StatusIndicator from './StatusIndicator';
import LaunchTimeDisplay from './LaunchTimeDisplay';
import { Flex, Image, Heading, Text } from '@chakra-ui/react';

const LaunchCard = ({ id, name, status, missionDescription, imageUrl, slug, launchTime }) => {
  const buildLink = () => `https://go4liftoff.com/launch/${slug}`;
  return (
    <Flex width="40rem" height="18rem" bgColor="gray.700" margin="1rem" borderRadius="lg" opacity="90%">
      <Image src={imageUrl} alt={name} width="12rem" fit="cover" borderLeftRadius="lg" />
      <Flex textColor="white" flexFlow="row wrap" padding="0.5rem">
        <Flex justifyContent="space-between" flex="1" marginTop="0.5rem">
          <Heading size="md">{name}</Heading>
          <StatusIndicator status={status} />
        </Flex>
        <Text noOfLines={2} maxHeight="3.2rem">
          {missionDescription}
        </Text>
        <LaunchTimeDisplay time={launchTime} />
        <ShareButton link={buildLink()} />
      </Flex>
    </Flex>
  );
};

export default LaunchCard;

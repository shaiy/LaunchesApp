import { Box } from '@chakra-ui/react';

const StatusIndicator = ({ status }) => {
  const getColor = () => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'green.500';
      case 'failure':
        return 'red.500';
      case 'tbc':
      case 'tbd':
        return 'yellow.500';
      default:
        return 'blue.200';
    }
  };

  return (
    <Box height="1.6rem" width="6rem" bgColor={getColor()} borderRadius="full" textAlign="center" fontWeight="bold">
      {status}
    </Box>
  );
};

export default StatusIndicator;

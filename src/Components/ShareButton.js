import { BsFillShareFill } from 'react-icons/bs';
import { Button } from '@chakra-ui/react';

const ShareButton = ({ link }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    return false;
  };

  return (
    <Button
      leftIcon={<BsFillShareFill />}
      onClick={copyToClipboard}
      width="6rem"
      borderRadius="xl"
      colorScheme="linkedin"
      variant="solid"
      marginTop="2rem"
      marginBottom="2rem"
    >
      Share
    </Button>
  );
};

export default ShareButton;

import { BsFillShareFill } from 'react-icons/bs';

const ShareButton = ({ link }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    return false;
  };

  return (
    <button onClick={copyToClipboard}>
      <BsFillShareFill />
      <span>Share</span>
    </button>
  );
};

export default ShareButton;

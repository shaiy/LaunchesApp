import { BsFillShareFill } from 'react-icons/bs';

const ShareButton = ({ link }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    return false;
  };

  return (
    <button
      className="flex items-center bg-gray-200 hover:opacity-50 text-black p-2 rounded-full text-sm w-auto h-8 text-gray-600"
      onClick={copyToClipboard}
    >
      <BsFillShareFill />
      <span className="ml-2 mr-7 text-sm">Share</span>
    </button>
  );
};

export default ShareButton;

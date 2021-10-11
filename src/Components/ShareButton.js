const ShareButton = ({ link }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    return false;
  };

  return (
    <button
      class="flex items-center bg-gray-200 hover:opacity-50 text-black p-2 rounded-full text-sm w-auto h-8 text-gray-600"
      onClick={copyToClipboard()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-6 my-1">
        <path
          fill="currentColor"
          d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
        ></path>
      </svg>
      <span class="ml-2 mr-7 text-sm">Share</span>
    </button>
  );
};

export default ShareButton;

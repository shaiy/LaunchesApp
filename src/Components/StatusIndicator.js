const StatusIndicator = ({ status }) => {
  const getColor = () => {
    switch (status.toLowerCase()) {
      case 'success':
        return 'green-500';
      case 'failure':
        return 'red-500';
      case 'tbc':
      case 'tbd':
        return 'yellow-500';
      default:
        return 'blue-200';
    }
  };

  return <div className={`w-20 rounded-full text-center bg-${getColor()}`}>{status}</div>;
};

export default StatusIndicator;

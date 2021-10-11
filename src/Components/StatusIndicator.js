const StatusIndicator = ({ status }) => {
  const getColor = () => {
    return status.toLowerCase() === 'success' ? 'green-500' : 'red-500';
  };

  return <div className={`w-20 rounded-full text-center bg-${getColor()}`}>{status}</div>;
};

export default StatusIndicator;

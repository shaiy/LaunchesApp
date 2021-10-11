import ShareButton from './ShareButton';
import StatusIndicator from './StatusIndicator';
import LinesEllipsis from 'react-lines-ellipsis';
import LaunchTimeDisplay from './LaunchTimeDisplay';

const LaunchCard = ({ id, name, status, missionDescription, imageUrl, slug, launchTime }) => {
  const buildLink = () => `https://go4liftoff.com/launch/${slug}`;
  return (
    <div className="flex max-w-xl bg-gray-700 rounded-xl text-white">
      <div className="flex-none w-48 relative">
        <img src={imageUrl} alt={name} className="absolute inset-0 w-full h-full object-cover rounded-l-xl" />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-xl font-semibold">{name}</h1>
          <div className="w-full flex-none mt-2 mb-2">
            <StatusIndicator status={status} />
          </div>
        </div>
        <div className="flex space-x-3 mb-4 text-sm font-medium">
          <LinesEllipsis text={missionDescription} maxLine="2" />
        </div>
        <div className="w-full flex-none mt-10">
          <LaunchTimeDisplay time={launchTime} />
        </div>
        <div className="w-full flex-none mt-10">
          <ShareButton link={buildLink()} />
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;

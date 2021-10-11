import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import StatusIndicator from './StatusIndicator';

const Launch = ({ id, name, status, missionDescription, imageUrl, slug }) => {
  return (
    <Link to={`/launch/${id}`}>
      <div class="flex max-w-xl bg-white rounded">
        <div class="flex-none w-48 relative">
          <img src={imageUrl} alt={name} class="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-xl font-semibold">{name}</h1>
            <div class="w-full flex-none mt-2 mb-2">
              <StatusIndicator status={status} />
            </div>
          </div>
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <p class="flex-auto flex space-x-3">{missionDescription}</p>
          </div>
          <div class="w-full flex-none mt-10">
            <ShareButton />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Launch;

//w-full flex-none text-sm font-medium text-gray-500 mt-2 mb-2

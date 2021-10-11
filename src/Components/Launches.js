import { useState, useEffect } from 'react';
import LaunchCard from './LaunchCard';
import axios from 'axios';
import Switch from 'react-switch';

const Launches = () => {
  const [futureLaunches, setFutureLaunches] = useState(false);
  const [launches, setLaunches] = useState([]);

  const handleFutureLaunches = () => {
    setFutureLaunches(!futureLaunches);
  };

  useEffect(() => {
    const fetchData = async () => {
      const launchesType = futureLaunches ? 'upcoming' : 'previous';
      const result = await axios(`https://lldev.thespacedevs.com/2.2.0/launch/${launchesType}/`);
      setLaunches(result.data.results);
    };
    fetchData();
  }, [futureLaunches]);

  return (
    <div className="flex flex-col w-auto">
      <div className="flex mb-3 justify-center">
        <span className="text-white	mr-2">Future Launches</span>
        <Switch checked={futureLaunches} onChange={handleFutureLaunches} />
      </div>

      {launches.map((launch) => (
        <div className="flex mb-3 justify-center" key={launch.id}>
          <LaunchCard
            id={launch.id}
            name={launch.name}
            missionDescription={launch.mission.description}
            imageUrl={launch.image}
            status={launch.status.abbrev}
            slug={launch.slug}
            launchTime={launch.window_end}
          />
        </div>
      ))}
    </div>
  );
};

export default Launches;

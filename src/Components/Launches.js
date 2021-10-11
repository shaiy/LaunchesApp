import { useState, useEffect } from 'react';
import LaunchCard from './LaunchCard';
import axios from 'axios';

const Launches = () => {
  //const [futureLaunches, setFutureLaunches] = useState(false);
  const [launches, setLaunces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/');
      setLaunces(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <div class="">
      <div class="grid-cols-1 w-full mb-10 text-center p-7">
        <div class="mb-8">
          {launches.map((launch) => (
            <LaunchCard
              id={launch.id}
              name={launch.name}
              missionDescription={launch.mission.description}
              imageUrl={launch.image}
              status={launch.status.abbrev}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launches;

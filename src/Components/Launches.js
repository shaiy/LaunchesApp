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
    <div className="flex flex-col">
      {launches.map((launch) => (
        <div className="flex mb-3 justify-center" key={launch.id}>
          <LaunchCard
            id={launch.id}
            name={launch.name}
            missionDescription={launch.mission.description}
            imageUrl={launch.image}
            status={launch.status.abbrev}
            slug={launch.slug}
          />
        </div>
      ))}
    </div>
  );
};

export default Launches;

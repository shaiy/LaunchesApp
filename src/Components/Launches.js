import { useState, useEffect } from 'react';
import LaunchCard from './LaunchCard';
import axios from 'axios';
import Switch from 'react-switch';
import BeatLoader from 'react-spinners/BeatLoader';

const override = `
  display: block;
  margin: 0 auto;
  text-align: center;
  opacity: 50%;
`;

const Launches = () => {
  const [futureLaunches, setFutureLaunches] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFutureLaunches = () => {
    setFutureLaunches(!futureLaunches);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const launchesType = futureLaunches ? 'upcoming' : 'previous';
      const result = await axios(`https://lldev.thespacedevs.com/2.2.0/launch/${launchesType}/`);
      setLaunches(result.data.results);
      setLoading(false);
    };
    fetchData();
  }, [futureLaunches]);

  return loading ? (
    <BeatLoader color={'#BFDBFE'} loading={loading} css={override} size={30} />
  ) : (
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

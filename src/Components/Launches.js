import { useState, useEffect } from 'react';
import axios from 'axios';
import Switch from 'react-switch';
import BeatLoader from 'react-spinners/BeatLoader';
import Select from 'react-select';

import LaunchCard from './LaunchCard';
import Pagination from './Pagination';

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
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const pageSizeOptions = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 15, label: '15' },
    { value: 20, label: '20' },
  ];

  const handleFutureLaunches = () => {
    setFutureLaunches(!futureLaunches);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (pageSize) => {
    setPageSize(pageSize.value);
    setCurrentPage(1);
  };

  const offset = () => currentPage * pageSize;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const launchesType = futureLaunches ? 'upcoming' : 'previous';
      try {
        const result = await axios(
          `https://lldev.thespacedevs.com/2.2.0/launch/${launchesType}/?limit=${pageSize}&offset=${offset()}`
        );
        setLaunches(result.data.results);
        setTotalCount(result.data.count);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [futureLaunches, currentPage, pageSize]);

  return isError ? (
    <div className="text-white text-center">Something went wrong...</div>
  ) : loading ? (
    <BeatLoader color={'#BFDBFE'} loading={loading} css={override} size={30} />
  ) : (
    <div className="flex flex-col w-auto">
      <div className="flex mb-3 justify-center">
        <span className="text-white	mr-2">Future Launches</span>
        <Switch checked={futureLaunches} onChange={handleFutureLaunches} />
      </div>
      <div className="flex mb-3 justify-center">
        <span className="text-white	mr-2 mt-2">pageSize</span>
        <Select value={pageSize} options={pageSizeOptions} onChange={handlePageSizeChange} placeholder={pageSize} />
      </div>
      {launches.map((launch) => (
        <div className="flex mb-3 justify-center" key={launch.id}>
          <LaunchCard
            id={launch.id}
            name={launch.name}
            missionDescription={launch.mission?.description}
            imageUrl={launch.image}
            status={launch.status.abbrev}
            slug={launch.slug}
            launchTime={launch.window_end}
          />
        </div>
      ))}
      <div className="flex mb-3 justify-center">
        <Pagination
          className="text-center text-white"
          currentPage={currentPage}
          totalCount={totalCount}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Launches;

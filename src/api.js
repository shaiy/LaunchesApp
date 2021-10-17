import axios from 'axios';

export function getLaunchesData(futureLaunches) {
  const launchesType = futureLaunches ? 'upcoming' : 'previous';
  const url = `https://lldev.thespacedevs.com/2.2.0/launch/${launchesType}/`;
  return axios(url);
}

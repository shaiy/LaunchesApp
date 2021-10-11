import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './style.css';

import LaunchCard from './Components/LaunchCard';
import Launches from './Components/Launches';

const App = () => {
  return (
    <div>
      <Router>
        <header className="w-full mb-10 text-center p-7">
          <Link to="/" className="text-6xl text-white hover:text-gray-200">
            <h1>Launches App</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/launch/:id">
            <LaunchCard
              id={1234}
              name={"Shai's launch"}
              status={'success'}
              missionDescription={
                'This is the first flight of a small solid fuel rocket designed by iSpace, also known as Beijing Interstellar Glory Space Technology Ltd. It will carry several payloads for commercial customers to LEO.'
              }
              imageUrl="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/new2520shepard_image_20190207032624.jpeg"
              slug="slug"
            />
          </Route>
          <Route path="/">
            <Launches />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import DistrictPage from './pages/DistrictPage.mjs';
import LandingPage from './pages/LandingPage.mjs';
import RegionPage from './pages/RegionPage.mjs';
import TagPage from './pages/TagPage.mjs';

function App() {
  const [selections, setSelections] = useState({residency: null, species: null, region: null, district: null, tag: null})

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage selections={selections} setSelections={setSelections}/>
        </Route>

        <Route path='/regions'>
          <RegionPage selections={selections} setSelections={setSelections} />
        </Route>
        
        <Route path='/districts'>
          <DistrictPage selections={selections} setSelections={setSelections}/>
        </Route>
        
        <Route path='/tags'>
          <TagPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

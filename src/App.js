
import './style.scss';


import Contact from './Contact'

import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import Experience from './Experience';
import HomePage from './HomePageLayout';
import ServiceDetail from './ServiceDetailsPage';
import RecentWorkDetails from './RecentWorkDetails';



function App() {
  return (
    
   <div className="App">
      <Routes>

        <Route path ='/' element={<HomePage/>}>

        <Route index="/" element={ <Home/> } />
        <Route path="services" element={ <Services/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="portfolio" element={ <Portfolio/> } />
        <Route path="experience" element={ <Experience/> } />
        <Route path='service_details/:pid' element = {<ServiceDetail/>}/>
        <Route path='recent_work/:pid' element = {<RecentWorkDetails/>}/>
        
        </Route>

      </Routes>
    </div>
    
  );
}

export default App;

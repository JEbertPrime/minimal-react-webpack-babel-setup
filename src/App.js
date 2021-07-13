import React from 'react';
import Header from './containers/Header.jsx'
import SeaLevelRise from './containers/SeaLevelRise.jsx'
import Heat from './containers/Heat.jsx'
import CuttingEmissions from './containers/CuttingEmissions.jsx'
import MailForm from './components/MailForm.jsx'
import Resilience from './containers/BuildingResilience.jsx'
import Ecosystem from './containers/Ecosystem.jsx'
const App = ({ title }) => (
    <div >
        <Header />
        <main style={{overflowX:'hidden'}}>
        <SeaLevelRise/>
        <Heat />
        <Ecosystem />
        <CuttingEmissions />
        <Resilience />
        <MailForm />
        </main>
        
    </div>
);

export default App;

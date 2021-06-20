import React from 'react';
import Header from './containers/Header.jsx'
import SeaLevelRise from './containers/SeaLevelRise.jsx'
import Heat from './containers/Heat.jsx'
import CuttingEmissions from './containers/CuttingEmissions.jsx'
import MailForm from './components/MailForm.jsx'
import Ecosystem from './containers/Ecosystem.jsx'
const App = ({ title }) => (
    <div>
        <Header />
        <SeaLevelRise/>
        <Heat />
        <CuttingEmissions />
        <MailForm />
    </div>
);

export default App;

/* eslint-disable react/jsx-no-undef */
import './App.css';
import BrandsIntegration from'./components/BrandsIntegration'
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import Topfold from './components/Topfold';
import Footer from './components/Footer';
import TrendingNfts from './components/TrendingNfts';
function App() {
  return (
    <div className="max-width">
     <Header/>
     <Topfold/>
     <BrandsIntegration/>
     <TrendingNfts/>
     <InfoSection/>
     <Footer/>
    </div>
  );
}

export default App;

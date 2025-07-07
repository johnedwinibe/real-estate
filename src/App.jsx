import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Story from './components/Story';
import Travel from './components/Travel';
import Entourage from './components/Entourage';
import RSVP from './components/RSVP';
import FAQ from './components/FAQ';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/details" element={<Details />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/entourage" element={<Entourage />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App;
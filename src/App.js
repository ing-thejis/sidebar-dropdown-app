import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import About, { OurAim, OurVision } from './pages/About';
import Services, { ServicesOne, ServicesThree, ServicesTwo } from './pages/Services';
import Contact from './pages/Contact';
import Events, { EventsOne, EventsTwo } from './pages/Events';
import Support from './pages/Support';
import './App.css';

const App = () => {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route path="/about-us" element={<About />} />
				<Route path="/about-us/aim" element={<OurAim />} />
				<Route path="/about-us/vision" element={<OurVision />} />
				<Route path="/services" element={<Services />} />
				<Route path="/services/services1" element={<ServicesOne />} />
				<Route path="/services/services2" element={<ServicesTwo />} />
				<Route path="/services/services3" element={<ServicesThree />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/events" element={<Events />} />
				<Route path="/events/events1" element={<EventsOne />} />
				<Route path="/events/events2" element={<EventsTwo />} />
				<Route path="/support" element={<Support />} />
			</Routes>
		</Router>
	)
}

export default App
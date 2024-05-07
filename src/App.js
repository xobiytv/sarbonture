import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './page/Main'
import About from './page/Company'
import Tour from './page/Tour'

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
     
      
    </Routes>
    </Router >
  );
}

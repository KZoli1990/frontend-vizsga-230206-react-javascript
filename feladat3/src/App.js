import { BrowserRouter, Routes, Route } from "react-router-dom";
import Humor from "./pages/Humor";
import Scifi from "./pages/Scifi";
import NoPage from './pages/NoPage';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="/scifi" element={<Scifi />} />
          <Route path="/humor" element={<Humor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

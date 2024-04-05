import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./Pages/NotFoundPage.jsx";
import { HomePage } from "./Pages/HomePage.jsx";
import { AboutPage } from "./Pages/AboutPage.jsx";
import { ProyectsPage } from "./Pages/ProyectsPage.jsx";
import { SerticatedPage } from "./Pages/SerticatedPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/proyects" element={<ProyectsPage />} />
        <Route path="/serticated" element={<SerticatedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

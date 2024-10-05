import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Layout from "./Layout/Layout";
import Home from "./Page/Home";
import AboutPage from "./Page/AboutPage";
import ProjectPage from "./Page/ProjectPage";
import ContactPage from "./Page/ContactPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

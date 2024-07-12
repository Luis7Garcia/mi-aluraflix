import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home/Home";
import { VideoProvider } from "../context/VideoContext.jsx";
import NewVideo from "../pages/newVideo/NewVideo";
import FooterBar from "../components/FooterBar/index.jsx";
import Footer from "../components/Footer/index.jsx";


const AppRoutes = () => {
  return (
    <VideoProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="newVideo" element={<NewVideo />}></Route>
        </Routes>
        <FooterBar />
        <Footer />
      </BrowserRouter>
    </VideoProvider>
  );
};

export default AppRoutes;

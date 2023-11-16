import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Frame from "./components/about/Frame";
import Herp from "./components/hero/Herp";
import Programs from "./components/Programs/Programs";
import Popular from "./components/popoluar/Popular";
import Blog from "./components/blog/Blog";
import Gallery from "./components/gallerry/Gallery";
import Swiper from "./components/gallerry/Swiper";
import GallerySwiper from "./components/gallerry/GallerySwiper";
import Footer from "./components/footer/Footer";
import PreFooter from "./components/preFooter/PreFooter";

function App() {
  const [frame, setFrame] = useState(false);
  const [swipe, setSwipe] = useState(false);

  return (
    <div className="w-[1903px] m-0  p-0  ">
      <main className="w-100% w-100% ">
        <Herp className="w-100% w-100%" />
        <Frame frame={frame} setFrame={setFrame} />
        <About frame={frame} setFrame={setFrame} />
        <Programs />
        <Popular className="relative z-0" />
        <div className="h-[100px] w-[100%] z-1 absolute bg-white "> </div>
        <Blog className="mt-10" />
        <div className=" h-[] mb-[198px]">
          <GallerySwiper swipe={swipe} setSwipe={setSwipe} />
          <Gallery swipe={swipe} setSwipe={setSwipe} />
        </div>
        <div
          className="relative
        "
        >
          <PreFooter />{" "}
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;

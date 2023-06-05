import { useState } from "react";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./pageSection/About";
import Contact from "./pageSection/Contact";
import Experience from "./pageSection/Experience";
import Home from "./pageSection/Home";
import Portfolio from "./pageSection/Portfolio";

function App(): JSX.Element {
  const [target, setTarget] = useState<number>(1);
  return (
    <div className="flex flex-col">
      <NavBar target={target} />
      <SocialLinks />
      <Home setTarget={setTarget} />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

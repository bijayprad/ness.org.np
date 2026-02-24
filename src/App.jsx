import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Conference from "./pages/Conference";
import Members from "./pages/Members";
import Activities from "./pages/Activities";
import Contact from "./pages/Contact";

import JournalLayout from "./pages/Journal/JournalLayout";
import Journal1 from "./pages/Journal/Journal";
import Editorial from "./pages/Journal/Editorial";
import Guidelinesa from "./pages/Journal/Guidelinesa";
import Guidelinesb from "./pages/Journal/Guidelinesb";
import Reviewcommittee from "./pages/Journal/Reviewcommittee";
import Archieve from "./pages/Journal/Archieve";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/members" element={<Members />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/journal" element={<JournalLayout />}>
            <Route index element={<Journal1 />} />
            <Route path="editorial" element={<Editorial />} />
            <Route path="guidelinesa" element={<Guidelinesa />} />
            <Route path="guidelinesb" element={<Guidelinesb />} />
            <Route path="reviewcommittee" element={<Reviewcommittee />} />
            <Route path="archieve" element={<Archieve />} />
            
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
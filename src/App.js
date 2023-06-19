import "./styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./Layouts/RootLayout";

import AuthLogin from "./pages/AuthLogin";
import HelpLayout from "./Layouts/HelpLayout";

import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import InnerLayout from "./Layouts/InnerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<AuthLogin />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<InnerLayout />}>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

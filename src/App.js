import { useLocation, useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  const router = useRoutes(routes);
  const url = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [url]);

  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  );
}

export default App;

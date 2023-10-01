import AboutUs from "./pages/AboutUs/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Error404 from "./pages/Error404/Error404";
import Houses from "./pages/Houses/Houses";
import Index from "./pages/Index/Index";
import MyFavoritesHouses from "./pages/MyFavoritesHouses/MyFavoritesHouses";
import SalesConsultant from "./pages/SalesConsultant/SalesConsultant";
import Search from "./pages/Search/Search";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import SingleProperty from "./pages/SingleProperty/SingleProperty";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/houses", element: <Houses /> },
  { path: "/single-property/:houseName", element: <SingleProperty /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blog/:blogID", element: <SingleBlog /> },
  { path: "/my-favorites/", element: <MyFavoritesHouses /> },
  { path: "*", element: <Error404 /> },
  {
    path: "/sales-consultant/:consultantName",
    element: <SalesConsultant />,
  },
  {
    path: "/search/:city/:type/:room/:bathroom/:maxPrice",
    element: <Search />,
  },
];

export default routes;

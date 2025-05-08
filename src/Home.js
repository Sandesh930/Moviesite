import Movie from "./Movie";
import Search from "./Search";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <div className="container">
        {/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */}
        <Navbar />
        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;

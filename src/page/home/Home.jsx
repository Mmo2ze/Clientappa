import "./home.css";
import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/sidebar/Sidebar"
import Categories from "../../components/categories/Categories"
import Tablemain from "../../components/table/Tablemain"
import Testmain from "../../components/testmain/Testmain";
import Col from "../../components/columns/Col";
function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="content">
        <div className="sidebars">
          <Sidebar/>  
        </div>      
        <div className="main-content">
          <div className="upper-section">
            <Categories className="cont"/>
            <Col className="cont"/>
          </div>
          <Tablemain className="cont full-width"/>
        </div>
      </div>
    </div>
  );
}
export default Home;
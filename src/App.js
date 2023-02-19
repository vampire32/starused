
import './App.css';
import './css/style.css'
import './css/responsive.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
// import './css/bootstrap.css'
import OurServices from './Components/OurServices';
import Ourcompany from './Components/Ourcompany';
import Who from './Components/Who';
import OurFurniture from './Components/OurFurniture';
import Treding from './Components/Treding';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landingpage from './Components/Landingpage';
import Furniture from './Components/furnitures';
import Ready from './Components/ready';
import Contact2 from './Components/Contact2';
import About from './Components/About';
import Services from './Components/Services';
import Contactus from './Components/Contactus';
import Floating from './Components/Floating';

function App() {
  return (
		<>
			<Router>
				<NavBar />

				<Switch>
					<Route exact path="/">
						<div className="hero_area">
							<Home />
						</div>
						<Contactus />
						<Ourcompany />
						<OurServices />
						<Who />
						<OurFurniture />
						<Treding />
						<Contact />
					</Route>
					<Route exact path="/usedfurniture">
						<Landingpage
							topname="Fairy of Furniture"
							secondryname="Sell Your Used Furniture"
							thirdname="Home Appliance,Air Contioner & Household Items"
							desc="Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisiLorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi."
						/>
						<Contactus />
						<Furniture
							img="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
							img2="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
							Name="Nice Feature"
							Name2="Nice Feature"
							desc="Irure qui ullamco voluptate incididunt sint quis sit irure velit. Ut tempor ad commodo do cupidatat ex consectetur. "
							desc2="Irure qui ullamco voluptate incididunt sint quis sit irure velit. Ut tempor ad commodo do cupidatat ex consectetur. "
							l1="Unlimited domain names."
							l2="150&plus; components."
							l3="Lifetime updates."
							l4="24/7 technical support."
							l11="Unlimited domain names."
							l22="150&plus; components."
							l33="Lifetime updates."
							l44="24/7 technical support."
						/>
						<Ready />
						<Contact2 />
					</Route>
					<Route exact path="/homeappliances">
						<Landingpage
							topname="Fairy of Furniture"
							secondryname="Sell Your Used Furniture"
							thirdname="Home Appliance,Air Contioner & Household Items"
							desc="Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisiLorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi."
						/>
						<Contactus />
						<Furniture
							img="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
							img2="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
							Name="Nice Feature"
							Name2="Nice Feature"
							desc="Irure qui ullamco voluptate incididunt sint quis sit irure velit. Ut tempor ad commodo do cupidatat ex consectetur. "
							desc2="Irure qui ullamco voluptate incididunt sint quis sit irure velit. Ut tempor ad commodo do cupidatat ex consectetur. "
							l1="Unlimited domain names."
							l2="150&plus; components."
							l3="Lifetime updates."
							l4="24/7 technical support."
							l11="Unlimited domain names."
							l22="150&plus; components."
							l33="Lifetime updates."
							l44="24/7 technical support."
						/>
						<Ready />
						<Contact2 />
					</Route>
					<Route exact path="/usedaircondition">
						<Landingpage
							topname="Fairy of Furniture"
							secondryname="Sell Your Used Furniture"
							thirdname="Home Appliance,Air Contioner & Household Items"
							desc="Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisiLorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi."
						/>
						<Contactus />
						<Furniture
							img="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
							img2="https://res.cloudinary.com/uisual/image/upload/assets/devices/ipad.png"
							Name="Nice Feature"
							Name2="Nice Feature"
							desc="Irure qui ullamco voluptate incididunt sint quis sit irure velit. Ut tempor ad commodo do cupidatat ex consectetur. "
							desc2="Irure qui ullamco voluptate incididunt sint quis sit irure velit. Ut tempor ad commodo do cupidatat ex consectetur. "
							l1="Unlimited domain names."
							l2="150&plus; components."
							l3="Lifetime updates."
							l4="24/7 technical support."
							l11="Unlimited domain names."
							l22="150&plus; components."
							l33="Lifetime updates."
							l44="24/7 technical support."
						/>
						<Ready />
						<Contact2 />
					</Route>
					<Route exact path="/about">
						<About />
						<Ready />
					</Route>
					<Route exact path="/services">
						<Services />
					</Route>
					<Route exact path="/contactus">
						{/* <Contact/> */}
						<Contactus heading="Contact Us" />
						<Contact />
					</Route>
				</Switch>
				<Floating />
				<Footer />
			</Router>
		</>
	);
}

export default App;

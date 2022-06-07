

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
} from "reactstrap";

import routes from "routes.js";
import {getLogout} from "Redux/actions/user.actions";
import {useHistory} from "react-router-dom";
import DatePicker from "./datePicker";
import axios from "axios";
import { getAssets } from "Redux/actions/assetsActions";
import { userColumns, userRows} from '../../Widgets/datatablesource';
import MyDatePicker from "Widgets/DatePicker";


import { IoMdNotificationsOutline } from 'react-icons/io';
import '../../Widgets/demonavbar.css';
import '../../Widgets/costenergy.scss';
import arr from "./data";
import DevicesIcon from '@mui/icons-material/Devices';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'






function DemoNavbar(props, type) {
  
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [dropdownOpen3, setDropdownOpenA] = React.useState(false);
  const [dropdownOpen2, setDropdownOpenD] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const dispatch= useDispatch();
  const history= useHistory();




  const [openDate, setOpenDate]=useState(false)
  const [destination, setDestination]=useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const handleSearch = ()=>{
    history.push("/admin/devices", {state:{destination, date}});
  }

  // const [DDL1, setDDL1]=useState({DDL: []});
  // const [DDL2, setDDL2]=useState({DDLtwo: []});
  // const [selectddl, SetSelectddl]=useState({ddlselected: ''});
  // useEffect(()=>{
  //   setDDL1({
  //     DDL : [
  //       {name : 'Colors', DDLtwo: ['blue', 'red','orange']},
  //       {name : 'Fruits', DDLtwo: ['apple', 'mango', 'watermelon', 'kiwi']},
  //       {name : 'Countries', DDLtwo : ['USA', 'Tunisia']},
  //       {name : 'Sports', DDLtwo:['cricket']},
  //     ]
  //   })
  // },[setDDL1]);

  // const selectChange = (e)=>{
  //    SetSelectddl(e.target.value)
  //    setDDL2(DDL1.find(x=>(x.name)===e.target.value).DDL2)
  // }
  //another solution for dependent dropdown
  const StateList = arr;
  let citiesList = [];

  const [cities, setCities] = useState([]);
  const [stateName, setstateName] = useState(arr[0].state);
  const [cityName, setcityName] = useState();

  const getCities = (event) => {
    console.log("State:" + event.target.value);
    for (let i = 0; i < StateList.length; i++) {
      if (StateList[i].state == "" + event.target.value)
        citiesList = StateList[i].cities;
    }
    console.log("cityList" + citiesList);
    setCities(citiesList);
    setstateName(event.target.value);
    setcityName(citiesList[0].name);
  };

  const refreshCityName = (event) => {
    setcityName(event.target.value);
  };


  const assets = useSelector((state)=>state.asset);

  const GetAssets = async () => {
       const response= await axios.get('https://fakestoreapi.com/products').catch((err)=>{
         console.log('errrr',err)
       });
       dispatch(getAssets(response.data));
  }
  useEffect(()=>{
    GetAssets();
  },[]);

  function onChange(timestamp) {
    console.log(timestamp);
  }


  const handleLogout = (e) => {
    
    e.preventDefault();
    dispatch(getLogout());
    history.push("/login");
  
}
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("white");
    }
    setIsOpen(!isOpen);
  };
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  const dropdownToggleD = (e) => {
    setDropdownOpenD(!dropdownOpen2);
  };
  const dropdownToggleA = (e) => {
    setDropdownOpenA(!dropdownOpen3);
  };
  const getBrand = () => {
    var name;
    routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
  }, []);
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);


  
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "white"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      {/* <div className="navbar">
            <div className="avatar">
               <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt="" />
               <div className="info">
                 <h4 className="title"> Sirine Znaidi</h4>
                 <h6 className="status">Online</h6>
               </div>
               <div className="navbar__info">
                 <IoMdNotificationsOutline /> 
               </div>  
            </div>
      </div> */}
      <Container fluid>
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand href="/">{getBrand()}</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          
          {/* <form>
            <InputGroup className="no-border">
              <Input placeholder="Search..."/>
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="now-ui-icons ui-1_zoom-bold" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form> */}
          
          {  type == "list" &&
            <><div className="transactions">
            <div className="transactions__details">
              <div>
                <button>Today</button>
                <button>Month</button>
                <button>Year</button>
              </div>
            </div>
          </div></>}
          <div className="header">
            <div className="headerSearch">
              <div className="headerSearchItem">
                <DevicesIcon className="headerIcon"/>
                <input type="text" placeholder="Search for you device" className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}/>
              </div>
              <div className="headerSearchItem">
                <DateRangeIcon className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>
                { openDate && <DateRange
                      editableDateInputs={true}
                      onChange={item => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                />}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </div>
          {/* <div>
          <DatePicker />
          </div>  */}
          {/* <MyDatePicker onChange={onChange}/> */}
           

         <Nav navbar>  
          <Dropdown
              nav
              isOpen={dropdownOpen}
              toggle={(e) => dropdownToggle(e)}
              >
              <DropdownToggle caret nav>
                <i className="now-ui-icons location_world" />
                <p>
                  <span>Assets</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right >
                {/* {
                  DDL1.DDL && DDL1.DDL.map((x)=>{
                    return <DropdownItem>{x.name}</DropdownItem>
                  })
                } */}
                {/* <DropdownItem  onClick={(e) => e.preventDefault()}>Asset 1</DropdownItem>
                <DropdownItem  onClick={(e) => e.preventDefault()}>Asset 2</DropdownItem>
                <DropdownItem  onClick={(e) => e.preventDefault()}>Asset 3</DropdownItem> */}
              </DropdownMenu>
           </Dropdown>
            
            <Dropdown
              nav
              isOpen={dropdownOpen2}
              toggle={(e) => dropdownToggleD(e)}
              >
              <DropdownToggle caret nav>
                <i className="now-ui-icons location_world" />
                <p>
                  <span>Devices</span>
                </p>
              </DropdownToggle>
              <DropdownMenu right >
              {/* {
                  DDL2.DDLtwo && DDL2.DDLtwo.map((x)=>{
                    return <DropdownItem>{x}</DropdownItem>
                  })
                } */}
                {/* <DropdownItem tag={Link} to="/admin/device">Device 1 </DropdownItem>
                <DropdownItem >Device 2</DropdownItem>
                <DropdownItem >Device 3</DropdownItem> */}
              </DropdownMenu>
            </Dropdown>
            
             
           
            <Dropdown
              nav
              isOpen={dropdownOpen3}
              toggle={(e) => dropdownToggleA(e)}
            >
            <DropdownToggle caret nav>
                <DropdownMenu right>
                <DropdownItem tag={Link} to="/admin/user-page">My Profile</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem  onClick={handleLogout}>Log Out</DropdownItem>
                </DropdownMenu>
              
                <i className="now-ui-icons users_single-02" />
                <p>
                  <span className="d-lg-none d-md-block">Account</span>
                </p>
            </DropdownToggle>  
            </Dropdown>
            {/* <div>
                <h5>City List</h5>
                <select name="StateList" onChange={getCities}>
                  {StateList.map((e, key) => {
                    return (
                      <option key={key} value={e.state}>
                        {e.state}
                      </option>
                    );
                  })}
                </select>
                {stateName}
             </div>
             <h5> Cities</h5>
              <div>
                <select name="CityList" onChange={refreshCityName}>
                  {cities.map((e, key) => {
                    return (
                      <option key={key} value={e.name}>
                        {e.name}
                      </option>
                    );
                  })}
                </select>
                {cityName}
              </div> */}
            {/* <NavItem>
              <Link to="#pablo" className="nav-link">
                <i className="now-ui-icons users_single-02" />
                <p>
                  <span className="d-lg-none d-md-block">Account</span>
                </p>
              </Link>
            </NavItem> */}
              
        </Nav>
      </Collapse>
      </Container>
    </Navbar>
  );
}

export default DemoNavbar;

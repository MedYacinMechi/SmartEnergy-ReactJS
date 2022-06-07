import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav } from "reactstrap";

function Example() {
  const [selected, setSelected] = React.useState("selected1");
  return (
    <>
      <Nav
        className="  flex-column flex-sm-row"
        id="tabs-text"
        pills
        role="tablist"
      >
        <NavItem>
          <NavLink
            aria-controls="tabs-text-1"
            aria-selected={selected === "selected1"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected1" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-1-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected1");
            }}
            role="tab"
          >
            Today
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-controls="tabs-text-2"
            aria-selected={selected === "selected2"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected2" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-2-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected2");
            }}
            role="tab"
          >
            Week
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            aria-controls="tabs-text-3"
            aria-selected={selected === "selected3"}
            className={
              "mb-sm-3 mb-md-0 " + (selected === "selected3" ? "active" : "")
            }
            data-toggle="tab"
            href="#pablo"
            id="tabs-text-3-tab"
            onClick={(e) => {
              e.preventDefault();
              setSelected("selected3");
            }}
            role="tab"
          >
            Month
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}

export default Example;
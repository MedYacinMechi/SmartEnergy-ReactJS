
import React, {useEffect, useState} from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent,
  TabPane, } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { Bar } from "react-chartjs-2";

//chartjs
import {
  dashboard24HoursPerformanceChart,
  
} from "variables/charts.js"; 

import {useDispatch, useSelector} from "react-redux";
import {getData} from "Redux/actions/chartAction";

import Charts from "Widgets/Charts";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import '../Widgets/costenergy.scss';



function Icons() {
  const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
  const dispatch = useDispatch();
  const state = useSelector( state => state.chart);
  const dataTest = useSelector(state =>state.chart.chartsData.cost); 
  var fetched = {
    data:[],
    labels:[]
  }
  async function fetchData (time) {
    //fetch data from redux using time
    await dispatch(getData({time: time},'cost'))
    console.log(dataTest)

  }
  const loading =true;

  const data = [
    {
      data2: 2000,
      data1: 2400,
    },
    {
      data2: 4000,
      data1: 1398,
    },
    {
      data2: 5000,
      data1: 12800,
    },
    {
      data2: 8780,
      data1: 3908,
    },
    {
      data2: 9890,
      data1: 4800,
    },
    {
      data2: 11390,
      data1: 3800,
    },
    {
      data2: 3490,
      data1: 4300,
    },
  ];
  
  
  return (
    <>
    <PanelHeader size="sm" />
    <div className="content">
      <Row>
        <Col  md={12} >
          <Card>
          <div className="transactions">
            <div className="transactions__info">
              <h3>Cost vs Energy</h3>
              <div className="transactions__info__detailed">
                <div>
                  <h5>Last Day :</h5>
                  <h4>$140,734.01</h4>
                </div>
                <div>
                  <h5>Today : </h5>
                  <h4>$347,735,011.14</h4>
                </div>
              </div>
            </div>
            <div className="transactions__details">
              <div>
                <h4>Statistics</h4>
                <h4>Up by 50%</h4>
              </div>
              <div>
                <button>AreaChart</button>
                <button>BarChart</button>
                <button>PieChart</button>
              </div>
            </div>
          </div>
          <Charts title="Cost of energy consumtion" />
          </Card>
        </Col> 
      </Row>
    </div>

      {/* <div className="charts">
               <Charts title="Last 6 months (Consumption)"/>
      </div>  */}
      {/* <div className="content">
        <Row>
          <Col md={12}>
            <Card className="shadow">
              <CardHeader>
              <h5 className="title">Cost And Energy</h5>
               <div>
                <Nav className="d-flex flex-row bd-highlight mb-3 justify-content-sm-around" pills role="tablist" >
                <NavItem>
                  <NavLink 
                    className={
                      "mb-sm-3 mb-md-0 " + "shadow p-3 mb-5 bg-white rounded" +
                      (hTabsIcons === "hTabsIcons-1" ? "active" : "")
                    }
                    href="#"
                    

                    onClick={(e) => {
                      e.preventDefault();
                      setHTabsIcons("hTabsIcons-1")
                      fetchData("1min"); }}  
                  >
                    Today
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " + "shadow p-3 mb-5 bg-white rounded" +
                      (hTabsIcons === "hTabsIcons-2" ? "active" : "")
                    }
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setHTabsIcons("hTabsIcons-2")
                      fetchData("5min");
                    }}  
                  >
                    Week 
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " + "shadow p-3 mb-5 bg-white rounded" +
                      (hTabsIcons === "hTabsIcons-3" ? "active" : "")
                    }
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setHTabsIcons("hTabsIcons-3")
                      fetchData("15min");
                    }} 
                  >
                    Month

                  </NavLink>
                </NavItem>
                </Nav>
                {state.loading && <p>Loading...</p>}
                 
              </div> 
                 
              </CardHeader>
              <CardBody className="all-icons"> 
              <TabContent id="myTabContent" activeTab={hTabsIcons}>
                <TabPane tabId="hTabsIcons-1" role="tabpanel">
                  <Bar
                     data={{
                      labels: fetched.labels,
                      datasets:[
                          {
                          label: 'Power',
                          data: fetched.data,
                          backgroundColor: 'rgba(255, 205, 86, 0.5)',
                          borderColor:  'rgb(255, 205, 86)',
                          borderWidth: 1.5
                          }]
                  }}
                     height={400}
                     width={600}
                     options={{
                     maintainAspectRatio : false,
                     responsive: true,
                     
                     plugins :{
                       legend : {
                         position : "top",
                       },
                     },
                     scales: {
                       yAxes : [{
                         ticks : {beginAtZero: true,},
                       },],
                     }
                     }}
                    />
                  
                </TabPane>

                <TabPane tabId="hTabsIcons-2" role="tabpanel">
                 
                  <Bar
                     data=
                     {{
                      labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7","Mar 8","Mar 9","Mar 10","Mar 11","Mar 12" ,"Mar 13"],
                      datasets:[
                      {
                        label: 'Power',
                        data: [65, 20, 60, 25, 56, 40, 70, 15, 55, 65, 88, 25, 15],
                        backgroundColor: 'rgba(255, 205, 86, 0.5)',
                        borderColor:  'rgb(255, 205, 86)',
                        borderWidth: 1.5
                      },

                      {
                        label: 'Cost',
                        data: [20, 80, 25, 81, 56, 40, 20, 15, 60, 55, 89, 75, 15],
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        borderColor:    'rgb(75, 192, 192)',
                        borderWidth: 1.5
                      },


                      ],
                      }}
                     height={400}
                     width={600}
                     options={{
                     maintainAspectRatio : false,
                     responsive: true,
                    
                     plugins :{
                       legend : {
                         position : "top",
                       },
                     },
                     scales: {
                       yAxes : [{
                         ticks : {beginAtZero: true,},
                       },],
                     }
                     }}
                    />
                   
                 
               </TabPane>
              
               <TabPane tabId="hTabsIcons-3" role="tabpanel">
                  <Bar
                     data={{
                      labels: ["Jan", "Feb", "Mar", "Apr", "May ", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
                      datasets:[
                      {
                        label: 'Power',
                        data: [65, 20, 60, 25, 56, 40, 70, 15, 55, 65, 88, 25],
                        backgroundColor: 'rgba(255, 205, 86, 0.5)',
                        borderColor:  'rgb(255, 205, 86)',
                        borderWidth: 1.5
                      },

                      {
                        label: 'Cost',
                        data: [20, 80, 25, 81, 56, 40, 20, 15, 60, 55, 89, 75],
                        backgroundColor: 'rgba(75, 192, 192, 0.5)',
                        borderColor:    'rgb(75, 192, 192)',
                        borderWidth: 1.5
                      },


                      ],
                      }}
                     height={400}
                     width={600}
                     options={{
                     maintainAspectRatio : false,
                     responsive: true,
                     plugins :{
                       legend : {
                         position : "top",
                       },
                     },
                     scales: {
                       yAxes : [{
                         ticks : {beginAtZero: true,},
                       },],
                     }
                     }}
                 />
                
               </TabPane>
              </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div> */}
    </>
  );
}

export default Icons; 


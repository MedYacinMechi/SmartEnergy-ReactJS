
import React, {useEffect, useState} from "react";
import axios from 'axios';
// react plugin used to create charts
import { Line,  Bar, Doughnut } from "react-chartjs-2";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import {
  dashboardPanelChart1,
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart,
  dashboardAllProductsChart2,
  CostData,
  PieChart,
} from "variables/charts.js";
import Widget from "Widgets/Widget";
import '../Widgets/dashboard.scss';
import Featured from "Widgets/Featured";
import Charts from "Widgets/Charts";
import TableDevice from "Widgets/Table";
import PieChartdevice from "Widgets/PieChart";
import FeaturedChart from "Widgets/Featured2";
import Cards from "Widgets/Cards";







function Dashboard() {
  

  const [devices, setDevices] =useState({device : []})
  useEffect(() => {
    const fetchDeviceList = async () => {
      const {data} = await axios("https://jsonplaceholder.typicode.com/users")
      setDevices({device: data})
      console.log(data)
    }
    fetchDeviceList()

  }, [setDevices])

  const [dataId, setData]=useState("");

  const [weekData, setWeekData]=useState(false);
  const [monthData, setMonthData]=useState(false);

  useEffect(()=> {
    dataId === "week"
    ? setWeekData(true)
    : setWeekData(false);
    dataId === "month"
    ? setMonthData(true)
    : setMonthData(false);
  },[dataId]);

  return (
    <div>
       
      <PanelHeader
        size="lg"
        content={
          <Bar
            data={dashboardPanelChart.data}
            options={dashboardPanelChart.options}
          />
        }
      />
      <div className="MainDash">
        <Cards/>
      </div>
      <div className="home">
        <div className="homeContainer">
            <div className="widgets">
              <Widget type="device"/>
              <Widget type="cost"/>
              <Widget type="energy"/>
              <Widget type="prediction"/>
            </div> 
            <div className="charts">
               <Featured/>
               <Charts title="Last 6 months (Consumption)"/>
            </div>
            <div className="charts">
               <Featured/>
               <PieChartdevice title="Devices Consumption"/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Devices Consumption Stats</div>
              <TableDevice/>
            </div>
          </div>
      </div>
      
          
      
      <div className="content">
        <Row>
        <Col xs={12} md={12}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Statistics</h5>
                <CardTitle tag="h4">Today Consumption</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right id={dataId} >
                    <DropdownItem key="week">Week Consumption</DropdownItem>
                    <DropdownItem key="month">Month Consumption</DropdownItem>
                    <DropdownItem >Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Refresh data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                 <div className="chart-area">
                  <Line
                    data={dashboardAllProductsChart.data}
                    options={dashboardAllProductsChart.options}
                  />
                </div> 
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Statistics</h5>
                <CardTitle tag="h4">Cost</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut 
                  data={CostData.data} 
                  options={CostData.options}
                //   plugins={[
                //     {
                //       beforeDraw(chart) {
                //        const { width } = chart;
                //        const { height } = chart;
                //        const { ctx } = chart;
                //        ctx.restore();
                //        const fontSize = (height / 160).toFixed(2);
                //        ctx.font = `${fontSize}em sans-serif`;
                //        ctx.textBaseline = 'middle';
                //        const { text } = "23";
                //        const textX = Math.round((width - ctx.measureText(text).width) / 2);
                //        const textY = height / 2;
                //        ctx.fillText(text, textX, textY);
                //        ctx.save();
                //      },
                //    },
                //  ]}
                />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>
          {weekData && <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Statistics</h5>
                <CardTitle tag="h4">Month Consumption</CardTitle>
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn-round btn-outline-default btn-icon"
                    color="default"
                  >
                    <i className="now-ui-icons loader_gear" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem>Something else here</DropdownItem>
                    <DropdownItem className="text-danger">
                      Remove data
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={dashboardAllProductsChart2.data}
                    options={dashboardAllProductsChart2.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated
                </div>
              </CardFooter>
            </Card>
          </Col>}
          <Col xs={12} md={4}>
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Statistics</h5>
                <CardTitle tag="h4">Global Consumption</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Backend Development</h5>
                <CardTitle tag="h4">Tasks</CardTitle>
              </CardHeader>
              <CardBody>
              <div className="chart-area">
                  <Doughnut 
                  data={CostData.data} 
                  options={CostData.options}/>
                </div>
               
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin" /> Updated 3
                  minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <CardHeader>
                <h5 className="card-category">All Devices List</h5>
                <CardTitle tag="h4">Devices Consumption Stats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Device Name</th>
                      <th className="text-right">Active Energy KWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      devices.device && devices.device.map((item) => (
                       <tr key={item.id}>
                         <td>{item.id}</td>
                         <td className="text-right">{item.name}</td>
                       </tr>

                      ))
                    }
                    
                    
                  </tbody>
                </Table>
                <nav>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink previous tag="button">
                          Back
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink tag="button">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next tag="button">
                          Next
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem></PaginationItem>
                    </Pagination>
                  </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Dashboard;

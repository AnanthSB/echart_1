import React from "react";
import ProModeChart from './ProModeChart'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AttributeComprision from './AttributeComprision';
import AttributeTradeOff from './AttributeTradeOff';
import { useState } from "react";
import { getGraphData } from "./config";
import {graphData} from './graphData.js';

export const TabChart = () => {

  // const data = [[0.505, 1175], [0.524, 1108], [0.525, 1110], [0.550, 1030]]
  const [data, setData] = useState(graphData)
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  //Firing getData function to call getGraphData.
  const getData = ()=>{
    return getGraphData(data);
  }

  return (
    <div className={classes.customRoot}>
      <AppBar position="static" className={classes.apppTab} >
        <Tabs
          className={classes.customTabs}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Efficiency Vs Cost" {...a11yProps(0)} />
          <Tab label="Attribute trade off" {...a11yProps(1)} />
          <Tab label="Attribute comprision" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
         <ProModeChart data={data} />
         {/* <ProModeChart data={getData()} /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AttributeTradeOff />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AttributeComprision />
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3} >{children}</Box>
    </Typography>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}
const useStyles = makeStyles(({
  customRoot: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: 'transparent',
  },
  apppTab:{
    backgroundColor: '#ffffffed',
  },
  customTabs: {
    height:"55px !important",
    fontWeight:'bold',
    backgroundColor: '#ffffffed'
  },
}));

export default TabChart;
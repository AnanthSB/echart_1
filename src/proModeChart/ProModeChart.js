import React, { useState } from "react";
import ReactEChart from "echarts-for-react";

//current data format [[0.505, 1175], [0.524, 1108], [0.525, 1110], [0.550, 1030]]
const ProModeChart=({data})=> {

  const getColor = (dataValue)=>{

    // colors can be given dynamically or conditionally once the API data is ready...
    const colors = {blue:'blue', transparent:'transparent', red:'red', green:'green'}
    switch (dataValue) {
      case 1175:
        return colors.blue
      case 1108:
        return colors.transparent
      case 1110:
        return colors.red
      case 1030:
        return colors.green

      default:
        return 'red'
    }
  }
  const eChartsOption = {
    xAxis: {
      scale: true,
      type: 'value',
      boundaryGap: false,
      splitLine:{show:false},

    },
    yAxis: {
      scale: true,
      nameLocation: 'end',
      nameRotate: 90,
      splitLine:{show:false},

      nameTextStyle: {
        align: "left",
        verticalAlign: "top",
        padding: [10, 10, 80, -60],
      },
      name: 'S/TON',
      boundaryGap: false,
    },
    series: [
      {
        symbolSize: 10,
        // below conditional coloring can be modified as per the later requirements
        data: data.map((item)=>{
          return           {
            value: item,
            // here item[1] means 1st index of the item array yAxis value.
            symbolSize: (item[1]===1108)?100:10,
            itemStyle: {
              color: `${(item[1]===1108)?'transparent':getColor(item[1])}`,
              borderColor: `${(item[1]===1108)?1:2}`,
            },
          }
        }),

        // data: [
        //   {
        //     value: data[0],
        //     itemStyle: {
        //       color: 'blue',
        //       borderColor: "black 2px",
        //     },
        //   },
        //   {
        //     value: data[1],
        //     symbolSize: 100,
        //     itemStyle: {
        //       color: 'transparent',
        //       borderColor: "black 1px"
        //     },
        //   },
        //   {
        //     value: data[2],
        //     itemStyle: {
        //       color: 'red',
        //       borderColor: "black 2px"
        //     },
        //   },
        //   {
        //     value: data[3],
        //     itemStyle: {
        //       color: 'green',
        //       borderColor: "black 2px"
        //     },
        //   }
        // ],
        type: 'scatter',
      },
    ],
  };
  return (
    <div>
      <ReactEChart
        style={{
          width: "1000px",
          height: "700px",
          marginLeft:"100px"
        }}
        option={eChartsOption}
      />
      <select style={{
        position: "relative",
        width: "auto",
        padding: "5px",
        border: "none",
        outline: "none",
      }}>
        <option value="">Full Load Efficiency(KN/TON)</option>
      </select>
    </div>
  );
}
export default ProModeChart;

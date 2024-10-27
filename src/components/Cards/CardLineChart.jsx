import {
    Card,
    CardBody,
    CardHeader,
    Typography,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  
  const chartConfig = {
    type: "bar",
    height: 350,
    series: [
      {
        name: "Complated Courses",
        data: [85, 43, 58, 40, 97],
      },
      {
        name: "Completed Paths",
        data: [64, 55, 45, 64, 65], 
        color: "#00FFFF", 
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0066FF"],
      plotOptions: {
        bar: {
          columnWidth: "30%", // Width of individual bars
          borderRadius: 2,
          
        },
      },
  
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: ["26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan"],
      },
  
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      legend: {
          position: "top",
          horizontalAlign: "right",
          markers: {
            shape: "circle",
          },
        },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  
  export default function Example() {
    return (
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div>
            <b>Score Acticity</b>
            <p style={{ fontSize: "12px",color:"#bdbdbd "}}>
              <b>Last 30 Days</b>
            </p>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            ></Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    );
  }
  
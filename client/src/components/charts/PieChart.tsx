import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack,Grid } from "@pankod/refine-mui";
import { useList } from "@pankod/refine-core";
import { PieChartProps } from "interfaces/home";
import GridLoader from "react-spinners/ClipLoader";

const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  const {  isLoading, isError } = useList({
    resource: "properties",
  });



if (isLoading)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <GridLoader color="hsla(216, 78%, 57%, 1)" size={100} />
    </Grid>
  );
if (isError)
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      Error
    </Grid>
  );

  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;

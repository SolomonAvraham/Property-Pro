import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack, Grid } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { useList } from "@pankod/refine-core";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import GridLoader from "react-spinners/ClipLoader";


const TotalRevenue = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
  });

  const totalRevenue = data?.data ?? [];

  const totalPrice = totalRevenue.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );


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
      p={4}
      flex={1}
      bgcolor="#fcfcfc"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Total Revenue
      </Typography>

      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">
          ${totalPrice.toLocaleString()}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475be8" }} />
          <Stack>
            <Typography fontSize={15} color="#475be8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;

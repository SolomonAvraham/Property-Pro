import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack, Grid } from "@pankod/refine-mui";
import GridLoader from "react-spinners/ClipLoader";
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties" ,
    //   pagination: {
    //     pageSize: 100,
    //   },
    // },
  });
  
 console.log(data);
 

  const latestProperties = data?.data ?? [];

  const propertiesForRent = latestProperties.filter(
    (item) => item.realEstateType === "Rent"
  ).length;
  const propertiesForSale = latestProperties.filter(
    (item) => item.realEstateType === "Sale"
  ).length;

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
    <Box>
      <Typography
        textAlign="center"
        fontSize={35}
        fontWeight={600}
        color="#11142D"
      >
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={propertiesForSale}
          series={[propertiesForSale, latestProperties.length]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={propertiesForRent}
          series={[propertiesForRent, latestProperties.length]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Total Properties"
          value={latestProperties ? latestProperties.length : 0}
          series={[latestProperties ? latestProperties.length : 0]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d">
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
              realEstateType={property.realEstateType}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

import { useList } from "@pankod/refine-core";
import { Box, Typography, Grid } from "@pankod/refine-mui";
import GridLoader from "react-spinners/ClipLoader";
import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const allAgents = data?.data ?? [];

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
        color="#11142d"
      >
        Agents List
      </Typography>

      <Box
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agents;

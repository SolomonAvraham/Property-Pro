import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { AgentCard } from "components";

const Agents = () => {
  const { data, isLoading, isError } = useList({ resource: "users" });

  const allAgents = data?.data ?? [];

  if (isLoading) return (
    <Typography textAlign="center" fontSize={35} fontWeight={600}>
      Loading...
    </Typography>
  );
  if (isError) return (
    <Typography textAlign="center" fontSize={35} fontWeight={600}>
     Error
    </Typography>
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

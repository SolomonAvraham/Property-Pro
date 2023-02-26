import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";
import { Typography,Grid } from "@pankod/refine-mui";
import { Profile } from "components";
import GridLoader from "react-spinners/ClipLoader";
const AgentProfile = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: id as string,
  });

  console.log(data);

  const myProfile = data?.data ?? [];

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
    <Profile
      type="Agent"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default AgentProfile;

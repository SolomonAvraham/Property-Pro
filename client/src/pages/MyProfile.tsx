import { Rowing } from "@mui/icons-material";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Typography, Grid } from "@pankod/refine-mui";
import { Profile } from "components";
import GridLoader from "react-spinners/ClipLoader";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

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
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
      realEstateType={myProfile.realEstateType}
    />
  );
};

export default MyProfile;

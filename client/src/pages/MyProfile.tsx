import { Rowing } from "@mui/icons-material";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Typography } from "@pankod/refine-mui";
import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return (
    <Typography   textAlign="center" fontSize={35} fontWeight={600}>
      Loading...
    </Typography>
  );
  if (isError) return (
    <Typography textAlign="center" fontSize={35} fontWeight={600}>
      Error
    </Typography>
  );

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;

import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  Link,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "contexts";
import { useNavigate } from "@pankod/refine-react-router-v6";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const navigate = useNavigate();

  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.

  return shouldRenderHeader ? (
    <AppBar
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: "#fcfcf" }}
    >
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.name ? (
              <Typography
                sx={{
                  "&:hover": {
                    color: "#3E6DBF",
                  },
                }}
                variant="button"
              >
                <Link href="/my-profile" color="inherit" underline="hover">
                  {user?.name}
                </Link>
              </Typography>
            ) : null}
            {user?.avatar ? (
              <Link href="/my-profile" color="inherit" underline="hover">
                <Avatar src={user?.avatar} alt={user?.name} />
              </Link>
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};

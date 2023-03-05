import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar,
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
      sx={{ background: "#475BE8", boxShadow: "3" }}
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
                  color: "whitesmoke",
                  fontSize: "17px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#111",
                  },
                }}
                variant="button"
                onClick={() => navigate("/my-profile")}
              >
                {user?.name}
              </Typography>
            ) : null}
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};

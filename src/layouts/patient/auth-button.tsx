// components/navbar/AuthButtons.tsx
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../locales";

interface AuthButtonsProps {
  onLogin: () => void;
}

export const AuthButtons = ({ onLogin }: AuthButtonsProps) => {
  const theme = useTheme();
  const { t } = useTranslate("common");

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Button
        variant="outlined"
        sx={{
          backgroundColor: theme.palette.info.dark,
          color: theme.palette.common.white,
          borderColor: theme.palette.info.dark,
          "&:hover": {
            backgroundColor: theme.palette.info.darker,
            borderColor: theme.palette.info.darker,
          },
        }}
        onClick={onLogin}
      >
        {t("navbar.login")}
      </Button>

      {/* <Button variant="contained" color="secondary" onClick={onRegister}>
        {t("navbar.register")}
      </Button> */}
    </Box>
  );
};

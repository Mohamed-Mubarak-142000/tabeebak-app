import {
  Box,
  Button,
  DialogActions,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { assets } from "../../assets/assets_frontend/assets";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../schemas/auth";
import { useTranslate } from "../../locales";

const LoginForm = ({ onclose }: { onclose: () => void }) => {
  const { t } = useTranslate("");
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleLoginSubmit(onLoginSubmit)}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 3,
        mt: 2,
      }}
    >
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <Box
          component={"img"}
          src={assets.logo}
          alt={"logo"}
          sx={{
            width: 100,
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 3,
            fontSize: { xs: ".5rem", md: ".75rem", lg: "1rem" },
          }}
          gutterBottom
        >
          welcome to our tabeebak app
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          {...loginRegister("email")}
          error={!!loginErrors.email}
          helperText={loginErrors.email?.message}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          {...loginRegister("password")}
          error={!!loginErrors.password}
          helperText={loginErrors.password?.message}
        />
      </Stack>

      <DialogActions sx={{ p: 3, pt: 0, mt: "auto" }}>
        <Button onClick={onclose}>{t("common.cancel")}</Button>
        <Button variant="contained" color="primary" type="submit">
          {t("navbar.login")}
        </Button>
      </DialogActions>
    </Box>
  );
};

export default LoginForm;

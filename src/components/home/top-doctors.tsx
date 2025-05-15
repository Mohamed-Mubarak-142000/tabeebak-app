import { Box, Button, Stack, Typography } from "@mui/material";
import TitleSection from "../title-section";
import { doctors } from "./data-static-doctors";
import DoctorItem from "./doctor-card";
import { useTranslate } from "../../locales";

const TopDoctors = () => {
  const { t } = useTranslate("home");
  return (
    <Stack spacing={5}>
      <TitleSection
        title={{ text: t("top_doctors.title"), variant: "h3" }}
        subTitle={{
          text: t("top_doctors.description"),
          variant: "h6",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {doctors.map((item, index) => (
          <DoctorItem doctor={item} key={index} />
        ))}
      </Box>

      <Button
        variant="contained"
        size="large"
        sx={{
          mx: "auto",
          mt: 5,
          borderRadius: 3,
          p: { xs: 1, md: 2, lg: 3 },
          width: "fit-content",
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "common.white",
            transition: (theme) =>
              theme.transitions.create(["background-color", "color"], {
                duration: theme.transitions.duration.shortest,
              }),
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "0.8rem", md: ".75rem", lg: "1rem" },
            fontWeight: (theme) => theme.typography.fontWeightBold,
            color: "common.white",
          }}
        >
          {t("top_doctors.view_all")}
        </Typography>
      </Button>
    </Stack>
  );
};

export default TopDoctors;

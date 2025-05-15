import { Stack, Typography, type SxProps } from "@mui/material";
import type { Variant } from "@mui/material/styles/createTypography";
import type { Theme } from "@mui/system";

interface TitleSectionProps {
  title: {
    sx?: SxProps<Theme>;
    text: string;
    variant?: Variant;
  };
  subTitle?: {
    sx?: SxProps<Theme>;
    text: string;
    variant?: Variant;
  };
}

const TitleSection = ({
  title = { text: "", variant: "h3" },
  subTitle = { text: "", variant: "h6" },
}: TitleSectionProps) => {
  return (
    <Stack
      spacing={{ xs: 1, md: 2 }}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant={title.variant}
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontSize: (theme) => theme.typography.pxToRem(24),
          fontWeight: (theme) => theme.typography.fontWeightBold,
          ...title.sx,
        }}
      >
        {title.text}
      </Typography>
      {subTitle && (
        <Typography
          variant={subTitle.variant}
          sx={{
            textAlign: "center",
            color: (theme) => theme.palette.text.secondary,
            fontWeight: (theme) => theme.typography.fontWeightBold,
            ...subTitle.sx,
          }}
        >
          {subTitle.text}
        </Typography>
      )}
    </Stack>
  );
};

export default TitleSection;

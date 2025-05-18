import { Box } from "@mui/material";
import { StyledNavLink, type NavItem } from "./navbar";
interface NavItemsProps {
  items: NavItem[];
}

export const NavItems = ({ items }: NavItemsProps) => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        gap: 4,
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <StyledNavLink key={item.name} to={item.path}>
          {item.name}
        </StyledNavLink>
      ))}
    </Box>
  );
};

// components/navbar/MobileMenu.tsx
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "../../locales";
import type { NavItem } from "./navbar";
import Logo from "../../components/logo";

interface MobileMenuProps {
  mobileOpen: boolean;
  items: NavItem[];
  onToggle: () => void;
}

export const MobileMenu = ({
  mobileOpen,
  items,
  onToggle,
}: MobileMenuProps) => {
  const theme = useTheme();
  const { t } = useTranslate("common");

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={onToggle}
        sx={{ color: theme.palette.text.primary }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: theme.palette.primary.darker,
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: theme.palette.primary.darker,
            height: "100%",
            color: theme.palette.text.primary,
          }}
          role="presentation"
          onClick={onToggle}
        >
          <Box sx={{ p: 2 }}>
            <Logo />
          </Box>
          <List>
            {items.map((item) => (
              <ListItem
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: theme.palette.common.white,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
            <ListItem
              component={Link}
              to="/login"
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.white,
                marginTop: 2,
                width: "90%",
                mx: "auto",
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <ListItemText
                primary={t("navbar.login")}
                sx={{ textAlign: "center" }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/logo";
import { useTranslate } from "../../locales";
import { CustomerLanguagePopover } from "../../components/lang-switch";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: "1rem",
  "&.active": {
    color: theme.palette.primary.main,
    fontWeight: 600,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const { t } = useTranslate("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems: NavItem[] = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.about"), path: "/about" },
    { name: t("navbar.doctors"), path: "/doctors" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.primary.darker,
        height: "100%",
        color: theme.palette.text.primary,
      }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
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
        <ListItem>
          {/* <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={toggleTheme}
                color="secondary"
              />
            }
            label={darkMode ? "Dark Mode" : "Light Mode"}
          /> */}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.darker,
          boxShadow: theme.shadows[3],
          py: 1,
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "lg",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Logo />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <StyledNavLink key={item.name} to={item.path}>
                {item.name}
              </StyledNavLink>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
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
              component={Link}
              to="/login"
            >
              {t("navbar.login")}
            </Button>

            {/* <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={toggleTheme}
                  color="secondary"
                />
              }
              label={darkMode ? "Dark" : "Light"}
            /> */}

            <CustomerLanguagePopover />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

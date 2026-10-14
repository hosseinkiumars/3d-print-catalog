import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  Menu as MenuIcon,
} from "@mui/icons-material";

import InstagramIcon from '@mui/icons-material/Instagram';

import {
  Link,
  useLocation,
} from "react-router-dom";

import { useState } from "react";

function Header() {
  const location = useLocation();

  const [menuAnchor, setMenuAnchor] =
    useState(null);

  const menuOpen = Boolean(menuAnchor);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        backgroundColor: "rgba(250,250,250,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            height: 72,
            minHeight: "72px !important",
          }}
        >
          <IconButton
            component={Link}
            to="https://instagram.com/chop3d?xtok=MWdxa2x4YXBrbXlsNg%3D%3D"
            color="secondary"
          >
            <InstagramIcon />
          </IconButton>
          {/* Brand */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.25,
              textDecoration: "none",
              color: "text.primary",
              mr: "auto",
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor:
                  "secondary.main",
              }}
            />
            <Typography
              sx={{
                fontSize: "1.05rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
              }}
            >
              گالری سه‌بعدی چاپ
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              alignItems: "center",
              gap: 1,
              mr: 4,
            }}
          >
            <Button
              component={Link}
              to="/"
              color={
                isActive("/")
                  ? "secondary"
                  : "inherit"
              }
              sx={{
                color: isActive("/")
                  ? "secondary.main"
                  : "text.primary",
              }}
            >
              خانه
            </Button>

            <Button
              component={Link}
              to="/products"
              color={
                isActive("/products")
                  ? "secondary"
                  : "inherit"
              }
              sx={{
                color: isActive("/products")
                  ? "secondary.main"
                  : "text.primary",
              }}
            >
              محصولات
            </Button>

            <Button
              component={Link}
              to="/order"
              color={
                isActive("/order")
                  ? "secondary"
                  : "inherit"
              }
              sx={{
                color: isActive("/order")
                  ? "secondary.main"
                  : "text.primary",
              }}
            >
              ارتباط با ما
            </Button>
          </Box>

          {/* Desktop CTA */}
          <Button
            component={Link}
            to="/order"
            variant="contained"
            color="primary"
            sx={{
              display: {
                xs: "none",
                md: "inline-flex",
              },
            }}
          >
            ثبت سفارش
          </Button>

          {/* Mobile Menu */}
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
              mr: 1,
            }}
            aria-label="باز کردن منو"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={menuAnchor}
            open={menuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MenuItem
              component={Link}
              to="/"
              onClick={handleMenuClose}
            >
              خانه
            </MenuItem>

            <MenuItem
              component={Link}
              to="/products"
              onClick={handleMenuClose}
            >
              محصولات
            </MenuItem>

            <MenuItem
              component={Link}
              to="/order"
              onClick={handleMenuClose}
            >
              ارتباط با ما
            </MenuItem>

            <MenuItem
              component={Link}
              to="/order"
              onClick={handleMenuClose}
              sx={{
                fontWeight: 700,
                color: "secondary.main",
              }}
            >
              ثبت سفارش
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
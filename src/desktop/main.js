import React from "react";
import {
  ClearAllOutlined,
  ClearOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../assets/images/lOGO 1.png";
import line from "../assets/images/Line pattern.png";
import profile from "../assets/images/Untitled design (5) 1.png";
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => {
    setDrawer(open);
  };

  const navigate = useNavigate();

  const DRAWER = () => {
    return (
      <div>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => toggleDrawer(false)}>
          <div className="bg-app-border h-full">
            <div className="px-5">
              <IconButton
                sx={{ color: "white", mt: 3 }}
                onClick={() => toggleDrawer(false)}>
                <ClearOutlined />
              </IconButton>
            </div>
            <List className="w-64 sm:w-80">
              {["Home", "Partners", "Resources", "Contact Us"].map(
                (text, index) => (
                  <ListItem key={index}>
                    <Button
                      fullWidth
                      sx={{
                        borderWidth: 1,
                        bgcolor: "#4F7A21",
                        borderRadius: 3,
                      }}>
                      <ListItemText primary={text} sx={{ color: "#ffffff" }} />
                    </Button>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List className="w-64 sm:w-80 ">
              {["Flexer", "Client", "Hire", "Register", "Login"].map(
                (text, index) => (
                  <ListItem key={index}>
                    <Button
                      fullWidth
                      sx={{
                        borderWidth: 1,
                        bgcolor: "#4F7A21",
                        borderRadius: 3,
                      }}>
                      <ListItemText primary={text} sx={{ color: "#ffffff" }} />
                    </Button>
                  </ListItem>
                )
              )}
            </List>
          </div>
        </Drawer>
      </div>
    );
  };

  return (
    <div>
      {/* nav bar */}
      <nav className="p-3 grid grid-flow-col items-center gap-5 justify-between lg:justify-around px-12">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul className="hidden lg:grid grid-flow-col  gap-8 ">
          <li className="text-app-gray font-bold">
            <a href="#home">Home</a>
          </li>
          <li className="text-app-gray font-bold">
            <a href="#partners">
              Partners <KeyboardArrowDownOutlined />
            </a>
          </li>
          <li className="text-app-gray font-bold">
            <a href="#resources">
              Resources <KeyboardArrowDownOutlined />
            </a>
          </li>
          <li className="text-app-gray font-bold">
            <a href="#contactUs">Contact Us</a>
          </li>
        </ul>

        <div className="hidden grid-flow-col lg:grid gap-4 items-center">
          {/* <text className="text-app-gray text-base font-black">Flexer</text> */}
          <Button
            key="three"
            sx={{
              color: "#344054",
              fontWeight: 600,
              textTransform: "none",
              borderColor: "#D0D5DD",
            }}
            onClick={() => navigate('/register')}
            variant="outlined">
            Flexer
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#669F2A",
            }}>
            Register
          </Button>
          <Button
            key="three"
            sx={{
              color: "#344054",
              fontWeight: 600,
              textTransform: "none",
              borderColor: "#D0D5DD",
            }}
            variant="outlined">
            Login
          </Button>
          {/* <text className="text-app-gray text-base font-black">Client</text> */}
          <Button
            key="three"
            sx={{
              color: "#344054",
              fontWeight: 600,
              textTransform: "none",
              borderColor: "#D0D5DD",
            }}
            onClick={() => navigate('/contactus')}
            variant="outlined">
            Client
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#4F7A21",
            }}>
            Hire
          </Button>
        </div>

        <div className="lg:hidden">
          {drawer ? (
            <IconButton
              sx={{ color: "black" }}
              onClick={() => toggleDrawer(false)}>
              <ClearOutlined />
            </IconButton>
          ) : (
            <IconButton
              sx={{ color: "black" }}
              onClick={() => toggleDrawer(true)}>
              <ClearAllOutlined />
            </IconButton>
          )}
          <DRAWER />
        </div>
      </nav>

      {/* box */}
      <div>
        <Box className="pb-24 mx-5 sm:mx-10 lg:mx-32 px-28 bg-app-moss rounded-3xl">
          <div className="pt-20 grid grid-flow-row gap-5 justify-center text-center">
            <text className="text-white font-bold text-4xl sm:text-5xl">
              Revolutionizing Contract Work
              <br /> with Corporate Perks
            </text>
            <text className="text-app-moss200 text-base sm:text-xl mt-4">
              We're pioneering the crowdstaffing revolution, providing a unique
              platform where <br /> contractors can embrace the flexibility of
              contract work without sacrificing the
              <br /> perks of corporate life.
            </text>
          </div>
          <div className="flex justify-center mt-10">
            <div className="grid grid-flow-row">
              <input
                placeholder="Enter your email"
                className="bg-white mr-7 rounded-lg p-2 min-w-36"
              />
              <text className="text-app-moss200 text-sm mt-2">
                We care about your data in our{" "}
                <a
                  style={{ textDecorationLine: "underline" }}
                  href="#privacypolicy">
                  privacy policy.
                </a>
              </text>
            </div>

            <Button
              variant="contained"
              sx={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "#669F2A",
                height: 42,
              }}>
              Get Started
            </Button>
          </div>
        </Box>

        <div className="flex mx-14 lg:mx-32 justify-center -mt-20">
          <Box className="shadow-2xl bg-white rounded-3xl px-10">
            <div className="flex justify-center text-center mt-7">
              <text className="text-app-gray900 text-lg font-semibold">
                Introducing XenFlexer across multiple industry verticals
              </text>
            </div>
            <div className="flex justify-center ">
              <img src={profile} alt="people" style={{ width: 700 }} />
            </div>
            <div className="grid grid-flow-col text-center pl-8 sm:pl-10 pb-5">
              <text className="text-app-gray900 text-lg font-semibold">IT</text>
              <text className="text-app-gray900 text-lg font-semibold">
                Helth Care
              </text>
            </div>
          </Box>
        </div>
      </div>

      {/* images line */}
      <img
        src={line}
        alt="line1"
        className="absolute bottom-0 left-0 hidden lg:flex"
      />
      <img
        src={line}
        alt="line1"
        className="absolute -bottom-80 right-0 hidden lg:flex"
      />
    </div>
  );
};

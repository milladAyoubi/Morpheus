import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";
import { useContext, useState } from "react";
import InputBase from "@mui/material/InputBase";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";
const Menu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <div className="menu">
      <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
        <MenuOutlinedIcon sx={{ color: "white" }} />
      </IconButton>

      {!isCollapsed && (
        <Box display="flex" justifyContent="space-between" py={3} width="100%">
          {/* SEARCH BAR */}
          <Box
            sx={{ backgroundColor: "#1F2A40", borderRadius: 25 }}
            display="flex"
          >
            <InputBase
              sx={{ ml: 2, flex: 1, color: "white" }}
              placeholder="Search"
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      )}
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link
              to="/"
              className={`listItem  ${
                isCollapsed ? "listItemCollapsed" : undefined
              }`}
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" />
              {!isCollapsed && (
                <span className="listItemTitle">{listItem.title}</span>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;

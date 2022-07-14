import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Select from "./select";
import BarInput from "./BarInput";
import LineInput from "./LineInput";
import DoughnutInput from "./DoughnutInput";

export default function SearchAppBar() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              REACT CHART
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/bar-chart" element={<BarInput />} />
        <Route path="/line-chart" element={<LineInput />} />
        <Route path="/doughnut-chart" element={<DoughnutInput />} />
      </Routes>
    </Router>
  );
}

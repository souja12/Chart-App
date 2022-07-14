import * as React from "react";
import "./select.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
export default function Select() {
  return (
    <div className="main">
      <h1>Pick Any Charts Of Your Choice</h1>
      <div className="btn">
        <Link to="/bar-chart">
          <Button variant="contained" color="success" endIcon={<SendIcon />}>
            Bar Chart
          </Button>
        </Link>
      </div>
      <div className="btn">
        <Link to="/line-chart">
          <Button variant="contained" color="error" endIcon={<SendIcon />}>
            Line Chart
          </Button>
        </Link>
      </div>
      <div className="btn">
        <Link to="/doughnut-chart">
          <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
            Doughnut Chart
          </Button>
        </Link>
      </div>
    </div>
  );
}

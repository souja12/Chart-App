import React, { useState } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TextField,
  Button,
} from "@mui/material";

import DoughnutChart from "./DoughnutChart";

export default function DoughnutInput() {
  const [subData, setSubdata] = useState([]);
  const [finalData, setFinaldata] = useState([]);
  function submitData(subData) {
    setFinaldata((finalData) => [...finalData, subData]);
    setSubdata((subData = {}));
    document.myForm.reset();
  }

  console.log(finalData);

  return (
    <div>
      <form name="myForm">
        <TableContainer style={{ display: "flex", justifyContent: "center" }}>
          <Table
            style={{ width: "50%", justifyContent: "center" }}
            size="small"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <TextField
                    onChange={(e) =>
                      setSubdata({ ...subData, sub: e.target.value })
                    }
                    value={subData["sub"]}
                    variant="outlined"
                    color="secondary"
                    placeholder="Name"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    onChange={(e) =>
                      setSubdata({ ...subData, sem: e.target.value })
                    }
                    value={subData["sem"]}
                    variant="outlined"
                    color="secondary"
                    type="number"
                    required="true"
                    placeholder="Weight"
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => submitData(subData)}
                  >
                    Add Data
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </form>
      <br></br>
      <DoughnutChart data={finalData} />
    </div>
  );
}

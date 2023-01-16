import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import HtAvatar from "./HTAvatar";
import { createSearchParams } from "react-router-dom";
import TerminalIcon from '@mui/icons-material/Terminal';


const columns = [
  {
    id: "course",
    label: "Course",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "level", label: "Level", minWidth: 100 },
  {
    id: "info",
    label: "Info",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "difficulty",
    label: "Difficulty",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "Time",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "completed",
    label: "Completed",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(1),
  },
];

export default function StickyHeadTable({ tableData, props }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleOnclick(e){
    props.setState(e.currentTarget.id)
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="WiFi Novice Fundamentals">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={data.course}
                    id={data.course}
                    onClick={handleOnclick}
                  >
                    {columns.map((column, index) => {
                      const value = data[column.id];
                      if (index === 0) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <HtAvatar /><TerminalIcon style ={{marginLeft: "30px", position: "relative", top: 5}}/><div style ={{ display: "inline"}}>{value}</div>
                        </TableCell>
                        );
                      } else if (value === -1) {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Checkbox checked={false} disabled={false} />
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      }
                      
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Array(tableData).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

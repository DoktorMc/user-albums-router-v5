import React from "react";
import { NavLink, Redirect, useHistory, useLocation } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const UserItem = ({ item }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const onLinkTo = (e) => {
    console.log(e.target);
    history.push(`${pathname}/${item.id}`);
  };
  return (
    <>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset", cursor: "pointer" } }}
        onClick={onLinkTo}
      >
        <TableCell align="center">{item.name}</TableCell>
        <TableCell align="center">{item.username}</TableCell>
        <TableCell align="center">{item.phone}</TableCell>
        <TableCell align="center">{item.email}</TableCell>
      </TableRow>
    </>
  );
};
export default UserItem;

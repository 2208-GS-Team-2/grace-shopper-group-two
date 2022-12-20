import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  setHasError,
  setSingleUser,
  setDeleteUser,
} from "../../../store/userSlice";
import UpdateUser from "./UpdateUser";
import { Button } from "@mui/material";
import Navbar from "../../mainPage/Navbar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SingleUser = ({ quantity }) => {
  //Custom Hooks
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //STATE
  const [formIsShown, setFormIsShown] = useState(false);

  //Selectors
  const { singleUser, user } = useSelector((state) => state.user);

  const fetchSingleUser = async () => {
    try {
      const response = await axios.get(`/api/users/${id}`);
      dispatch(setSingleUser(response.data));
    } catch (err) {
      dispatch(setHasError(true));
    }
  };

  //!ADMIN: deletes a user's info
  const deleteSingleUser = async () => {
    dispatch(setDeleteUser(id));
    const { data, deleted } = await axios.delete(`/api/users/${id}`, {});
    navigate("/allUsers");
  };

  useEffect(() => {
    fetchSingleUser(id);
  }, []);

  if (formIsShown) {
    return (
      <>
        <UpdateUser singleUser={singleUser} setFormIsShown={setFormIsShown} />
      </>
    );
  }
  return (
    <div className="container">
      <div className="header-content">
        <Navbar user={user} quantity={quantity} />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Admin Status</StyledTableCell>
              <StyledTableCell align="center">Update Role</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={singleUser.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {singleUser.username}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {singleUser.email}
              </StyledTableCell>
              <StyledTableCell align="center">
                {singleUser.isAdmin ? "Admin" : "-"}
              </StyledTableCell>
              <StyledTableCell align="center">
                <div>
                  <Button
                    variant="contained"
                    onClick={() => setFormIsShown(true)}
                    style={{ margin: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => deleteSingleUser()}
                  >
                    Delete
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SingleUser;

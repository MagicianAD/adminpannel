import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";

function Userlist() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },

    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="Userlistuser">
            <img className="UserlistImage " src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email ",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
      //   valueGetter: (params) =>
      //     `${params.getValue(params.id, "firstName") || ""} ${
      //       params.getValue(params.id, "lastName") || ""
      //     }`,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Snow",
      avatar:
        "https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      email: "ab@gmail.com",
      status: "active",
      transaction: "$343",
    },
    {
      id: 2,
      username: "Snow",
      avatar:
        "https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      email: "ab@gmail.com",
      status: "active",
      transaction: "$343",
    },
    {
      id: 3,
      username: "Snow",
      avatar:
        "https://images.pexels.com/photos/4823242/pexels-photo-4823242.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      email: "ab@gmail.com",
      status: "active",
      transaction: "$343",
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default Userlist;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
function Userlist() {
  const [data, setdata] = useState(userRows);
  const deleteHandler = (id) => {
    setdata(data.filter((items) => items.id !== id)); //filter function{delete data}
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },

    {
      field: "user",
      headerName: "User",
      width: 160,
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
      width: 190,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
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

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        //to use custom inside MUI grid
        return (
          <>
            {" "}
            <Link to={"/user/" + params.row.id}>
              <button className="userlistededit">Edit</button>
            </Link>
            <DeleteOutline
              className="userlistedelete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default Userlist;

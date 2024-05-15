import React from 'react'
import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


const ReportTable = ({landingData}) => {


    const dataGrid_Columns = [
    // {
    //   field: "id",
    //   headerName: "ID",
    //   minWidth: 150,
    //   headerAlign: "center",
    //   align: "center",
    //   flex: 1,
    // },
    {
      field: "actions",
      headerName: "Aksiyon",
      minWidth: 120,
      headerAlign: "center",
      align: "center",
      flex: 1,
      // renderCell: ({
      //   id,
      //   row: {
      //     name,
      //     surname,
      //     phone,
      //     email,
      //     topic,
      //     detail,
      //     datetime,
      //     actionType,
      //     actionResult,
      //     location

      //   }
      // }) => {
      //   return [
      //     <GridActionsCellItem
      //       key={'edit'}
      //       label='Edit'
      //       icon={<MdEdit size={23} style={{ cursor: 'pointer', color: '#E8C872' }} onClick={() => {
      //         handleOpen_action()
      //         setInfo({
      //           id,
      //           name,
      //           surname,
      //           phone,
      //           email,
      //           topic,
      //           detail,
      //           datetime,
      //           actionType,
      //           actionResult,
      //           location,
      //           type: "tesekkur"
      //         })
      //       }} />}

      //     />,

      //     <GridActionsCellItem
      //       key={'delete'}
      //       label='Delete'
      //       icon={<MdDeleteForever size={23} style={{ cursor: 'pointer', color: 'red' }} onClick={() => {
      //         handleOpen_delete()
      //         setInfo({
      //           id,
      //           name,
      //           surname,
      //           phone,
      //           email,
      //           topic,
      //           detail,
      //           datetime,
      //           actionType,
      //           actionResult,
      //           location,
      //           type: "tesekkur"
      //         })
      //       }} />}

      //     />

      //   ]
      // },
    },
    {
      field: "name",
      headerName: "Name Surname",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "countryCode",
      headerName: "PhoneCode",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "tel",
      headerName: "Phone",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "jobtype",
      headerName: "Job Type",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "company",
      headerName: "Company",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "datetime",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },



  ];


  


  return (
    <div>
        <Box p={3}>
        <DataGrid
          columns={dataGrid_Columns}
          rows={landingData}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 25, 50, 75, 100]}
          slots={{ toolbar: GridToolbar }}
          disableRowSelectionOnClick
          sx={{
            boxShadow: 4,
          }}
        />
      </Box>

    </div>
  )
}

export default ReportTable
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import './User.scss'
// import DeleteIcon from '@mui/icons-material/Delete';
// import { visuallyHidden } from '@mui/utils';
// import { TextField } from '@mui/material';
// import { Dropdown } from 'react-bootstrap';

// import { useAddPersonMutation, useViewPersonQuery } from '../../Redux/Services/UserTable';





// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert ',
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)',
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)',
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)',
//   },
// ];



// // tablehead------------------------------------------------------------------------------------------------------------------------------------------------



// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// // EnhancedTableHead.propTypes = {
// //   numSelected: PropTypes.number.isRequired,
// //   onRequestSort: PropTypes.func.isRequired,
// //   onSelectAllClick: PropTypes.func.isRequired,
// //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// //   orderBy: PropTypes.string.isRequired,
// //   rowCount: PropTypes.number.isRequired,
// // };



// // tablehead------------------------------------------------------------------------------------------------------------------------------------------------




// function EnhancedTableToolbar(props) {
//   const { numSelected ,dels,rows} = props;

//   const removeItems = () => {
//     for (let i = rows.length - 1; i >= 0; i--) {
//       if (dels.includes(rows[i].id)) {
//         rows.splice(i, 1);
//       }
//     }
//     console.log(rows);
//   };


//   const[nestopen,setnestopen]=React.useState(false)

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
     
//           <IconButton>
//           <Dropdown autoClose={false}>
//       <Dropdown.Toggle variant="light" id="dropdown-basic">
//         select option
//       </Dropdown.Toggle>

//       <Dropdown.Menu   >
//         <Dropdown.Item  onClick={removeItems} >Delete All </Dropdown.Item>
//         <Dropdown.Item onClick={()=>setnestopen(!nestopen)} >SetStatus 
//           {
//             nestopen?<ArrowDropDownIcon/>: <ArrowRightIcon/>
//           }
//           </Dropdown.Item>
//       {
//         nestopen && (
//           <div>
//              <Dropdown.Item >Active</Dropdown.Item>
//              <Dropdown.Item >Inactive</Dropdown.Item>
//           </div>
//         )
//       }
//       </Dropdown.Menu>

   
//     </Dropdown>

  
//           </IconButton>
   
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
        
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };








// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const { data, error, isLoading } = useViewPersonQuery();
//   const [rows, setRows] = React.useState([]);
//  console.log(data);
//   // Update rows when data is fetched
//   React.useEffect(() => {
//     if (data) {
//       setRows(data);
//     }
//   }, [data]);

//   console.log('rows is',rows);
//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   console.log(rows);
//   const[todelete,settodelete]=React.useState([])
//   const handleClick = (event, id) => {
//     const index = todelete.indexOf(id);

//     if (index > -1) {
//       todelete.splice(index, 1);
//       console.log(`Removed ID: ${id}`);
//     } else {
//       todelete.push(id);
//       console.log(`Added ID: ${id}`);
//     }
//     console.log(todelete);  
  

    
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }
//     setSelected(newSelected);
//   };





    
   

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (id) => selected.indexOf(id) !== -1;


//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const visibleRows = React.useMemo(
//     () =>
//       stableSort(rows, getComparator(order, orderBy)).slice(
//         page * rowsPerPage,
//         page * rowsPerPage + rowsPerPage,
//       ),
//     [order, orderBy, page, rowsPerPage],
//   );








//   return (
//        <div>
     
//         <BasicModal/>
    
//         <div>
//         <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} dels={todelete} rows={rows} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = isSelected(row.id);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.id)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.id}
//                     selected={isItemSelected}
//                     sx={{ cursor: 'pointer' }}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           'aria-labelledby': labelId,
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell
//                       component="th"
//                       id={labelId}
//                       scope="row"
//                       padding="none"
//                     >
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.calories}</TableCell>
//                     <TableCell align="right">{row.fat}</TableCell>
//                     <TableCell align="right">{row.carbs}</TableCell>
//                     <TableCell align="right">{row.protein}</TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
       
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>

//     </Box>
//         </div>

//        </div>
//   );
// }






//  function BasicModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const[userdetails,setuserdetails]=React.useState({
//       username:"",
//       password:""
//   })

//   const[addPerson]=useAddPersonMutation()
//   const adduser= async()=>{
//     await addPerson(data)
//   }

//   const[data,setdata]=React.useState(
//     {  id: 1, name: 'ebin', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 }
  
// )
  
//     return (
//       <div>
//           <button onClick={handleOpen} className='btns'>Adduser</button> 
//           <button onClick={handleOpen} className='btns'>Edit user</button>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box className='formstyle' >
//             <h3>adduser</h3>
//           <TextField style={{marginBottom:'20px'}}   id="outlined-basic" type='text' className='usernames' label="username" variant="outlined" />
//           <TextField style={{marginBottom:'20px'}}  id="outlined-basic" type='password' className='usernames' label="Password" variant="outlined"  />
//           <TextField  style={{marginBottom:'20px'}}   id="outlined-basic" type='text' className='usernames' label="username" variant="outlined" />
//           <TextField style={{marginBottom:'20px'}}  id="outlined-basic" type='password' className='usernames' label="Password" variant="outlined"  />
//           <TextField style={{marginBottom:'20px'}}  id="outlined-basic" type='password' className='usernames' label="Password" variant="outlined"  />
//           <TextField style={{marginBottom:'20px'}}  id="outlined-basic" type='password' className='usernames' label="Password" variant="outlined"  />
//           <Button className='usernames' variant="contained" onClick={adduser}>Submit</Button>
//           </Box>
//         </Modal>
//       </div>
//     );
//   }






import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './User.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { TextField } from '@mui/material';
import { Dropdown } from 'react-bootstrap';

import { useAddPersonMutation, useViewPersonQuery } from '../../Redux/Services/UserTable';





function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert ',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)',
  },
];



// tablehead------------------------------------------------------------------------------------------------------------------------------------------------



function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };



// tablehead------------------------------------------------------------------------------------------------------------------------------------------------




function EnhancedTableToolbar(props) {
  const { numSelected ,dels,rows} = props;

  const removeItems = () => {
    for (let i = rows.length - 1; i >= 0; i--) {
      if (dels.includes(rows[i].id)) {
        rows.splice(i, 1);
      }
    }
    console.log(rows);
  };


  const[nestopen,setnestopen]=React.useState(false)

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
     
          <IconButton>
          <Dropdown autoClose={false}>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        select option
      </Dropdown.Toggle>

      <Dropdown.Menu   >
        <Dropdown.Item  onClick={removeItems} >Delete All </Dropdown.Item>
        <Dropdown.Item onClick={()=>setnestopen(!nestopen)} >SetStatus 
          {
            nestopen?<ArrowDropDownIcon/>: <ArrowRightIcon/>
          }
          </Dropdown.Item>
      {
        nestopen && (
          <div>
             <Dropdown.Item >Active</Dropdown.Item>
             <Dropdown.Item >Inactive</Dropdown.Item>
          </div>
        )
      }
      </Dropdown.Menu>

   
    </Dropdown>

  
          </IconButton>
   
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
        
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};








export default function EnhancedTable() {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { data, error, isLoading } = useViewPersonQuery();
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };


  const[todelete,settodelete]=React.useState([])
  const handleClick = (event, id) => {
    const index = todelete.indexOf(id);

    if (index > -1) {
      todelete.splice(index, 1);
      console.log(`Removed ID: ${id}`);
    } else {
      todelete.push(id);
      console.log(`Added ID: ${id}`);
    }
    console.log(todelete);  
  

    
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };





    
   

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage,rows],
  );








  return (
       <div>
     
        <BasicModal/>
    
        <div>
        <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} dels={todelete} rows={rows} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
       
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

    </Box>
        </div>

       </div>
  );
}






 function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const[addPerson]=useAddPersonMutation()


  const[data,setdata]=React.useState(
    {  id: "",
       name: "",
      calories: "",
      fat: "",
      carbs: "",
      protein: ""
    
    }


  
)


const adduser=async (e)=>{
  e.preventDefault()
  const {id,name,calories,fat,carbs,protein}=data;
  if(!id||!name||!calories||!fat||!carbs||!protein){
    console.log("fill");
  }else{
   const result =await addPerson(data)
  }
 }
  
    return (
      <div className='modal-bodies'>
          <button onClick={handleOpen} className='btns'>Adduser</button> 
          <button onClick={handleOpen} className='btns'>Edit user</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='formstyle' >
            <h3>adduser</h3>
          <TextField style={{marginBottom:'20px'}} value={data.id} onChange={e=>setdata({...data,id:e.target.value})}   id="outlined-basic" type='text' className='usernames' label="enter id" variant="outlined" />
          <TextField style={{marginBottom:'20px'}} value={data.name} onChange={e=>setdata({...data,name:e.target.value})}  id="outlined-basic" type='text' className='usernames' label="Password" variant="outlined"  />
          <TextField  style={{marginBottom:'20px'}} value={data.calories} onChange={e=>setdata({...data,calories:e.target.value})}    id="outlined-basic" type='text' className='usernames' label="username" variant="outlined" />
          <TextField style={{marginBottom:'20px'}} value={data.fat} onChange={e=>setdata({...data,fat:e.target.value})}   id="outlined-basic" type='text' className='usernames' label="Password" variant="outlined"  />
          <TextField style={{marginBottom:'20px'}} value={data.carbs} onChange={e=>setdata({...data,carbs:e.target.value})}   id="outlined-basic" type='text' className='usernames' label="Password" variant="outlined"  />
          <TextField style={{marginBottom:'20px'}} value={data.protein} onChange={e=>setdata({...data,protein:e.target.value})}   id="outlined-basic" type='text' className='usernames' label="Password" variant="outlined"  />
          <Button className='usernames' variant="contained" onClick={adduser}>Submit</Button>
          </Box>
        </Modal>
      </div>
    );
  }
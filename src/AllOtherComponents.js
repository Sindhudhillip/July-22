import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slider,
  Switch,
  Tabs,
  Tab,
  Tooltip,
  Alert,
  Pagination,
  Menu,
  MenuItem as MenuOption,
  InputLabel,
  Autocomplete,
  OutlinedInput,
  Chip,
} from '@mui/material';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [file, setFile] = useState(null);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{ padding: 4 }}>
    <TextField label="Text Input" variant="outlined" data-cy="text-input" fullWidth margin="normal" />
    {/* <TextField label="Password" variant="outlined" type="password" data-cy="password-input" fullWidth margin="normal" /> */}

    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker label="Uncontrolled picker" defaultValue={dayjs("2022-04-17")} />
        <DatePicker label="Controlled picker" value={dateValue} onChange={(newValue) => setDateValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider> */}


    <Autocomplete
        data-cy="autocomplete-input"
        value={value}
        
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
        renderInput={(params) => <TextField {...params} label="AutoComplete" data-cy="autocomplete" />}
      />
      <FormControl fullWidth>
        <InputLabel id="multi-select-label">Multi-select</InputLabel>
        <Select
          labelId="multi-select-label"
          id="multi-select"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Multi-select" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          data-cy="multi-select"
        >
          {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    <FormControl fullWidth margin="normal">
      <InputLabel id="demo-simple-select-label">Select Box</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" data-cy="select-box">
        <MenuItem value="Option 1">Option 1</MenuItem>
        <MenuItem value="Option 2">Option 2</MenuItem>
        <MenuItem value="Option 3">Option 3</MenuItem>
      </Select>
    </FormControl>
    <Button variant="contained" color="primary" data-cy="button">
      Button
    </Button>
    <Box>
    <FormControlLabel control={<Checkbox data-cy="checkbox" />} label="Checkbox" />
    </Box>
    <Box>
       <FormControl component="fieldset" margin="normal">
      <FormLabel component="legend">Radio Group</FormLabel>
      <RadioGroup row data-cy="radio-group">
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    </FormControl>
    </Box>
   
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="Textarea"
      style={{ width: '100%', marginTop: 16, padding: 8 }}
      data-cy="textarea"
    />
    <Link href="#" data-cy="link" sx={{ display: 'block', marginTop: 2 }}>
      Link
    </Link>
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table data-cy="table">
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Cell 1</TableCell>
            <TableCell>Row 1, Cell 2</TableCell>
            <TableCell>Row 1, Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Cell 1</TableCell>
            <TableCell>Row 2, Cell 2</TableCell>
            <TableCell>Row 2, Cell 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="outlined" color="primary" onClick={handleClickOpen} data-cy="dialog-button">
      Open Dialog
    </Button>
    <Dialog open={open} onClose={handleClose} data-cy="dialog">
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog Content</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" data-cy="slider" sx={{ marginTop: 4 }} />
    <FormControlLabel control={<Switch defaultChecked />} label="Switch" data-cy="switch" sx={{ display: 'block', marginTop: 2 }} />
    <Tabs value={selectedTab} onChange={handleTabChange} data-cy="tabs" sx={{ marginTop: 4 }}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
    </Tabs>
    <Tooltip title="Tooltip text" data-cy="tooltip">
      <Button sx={{ marginTop: 4 }}>Hover over me</Button>
    </Tooltip>
    <Alert severity="success" data-cy="alert" sx={{ marginTop: 4 }}>
      This is a success alert!
    </Alert>
    <Pagination count={10} color="primary" data-cy="pagination" sx={{ marginTop: 4 }} />
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuOpen} data-cy="menu-button" sx={{ marginTop: 4 }}>
      Open Menu
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      data-cy="menu"
    >
      <MenuOption onClick={handleMenuClose}>Profile</MenuOption>
      <MenuOption onClick={handleMenuClose}>My account</MenuOption>
      <MenuOption onClick={handleMenuClose}>Logout</MenuOption>
    </Menu>
    <input
      type="file"
      onChange={handleFileChange}
      data-cy="file-upload"
      style={{ display: 'block', marginTop: 4 }}
    />
  </Box>
  );
};

export default App;

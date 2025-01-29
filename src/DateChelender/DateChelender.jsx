import React, { useState } from "react";
import { Popover, Button,TextField , Typography, Box } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro';

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import styled from "styled-components";

const CalendarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 350px;
`;

const DatePicker = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "date-range-picker" : undefined;
  const [value, setValue] = useState([null, null]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Button variant="outlined" onClick={handleClick}>
        Select Dates
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <CalendarContainer>
          <Typography variant="h6">Select Your Dates</Typography>
          <DateRangePicker
  localeText={{ start: 'Start date', end: 'End date' }}
  value={value}
  onChange={(newValue) => setValue(newValue)}
  renderInput={(startProps, endProps) => (
    <>
      <TextField {...startProps} />
      <TextField {...endProps} />
    </>
  )}
/>

        </CalendarContainer>
      </Popover>
    </LocalizationProvider>
  );
};

export default DatePicker;

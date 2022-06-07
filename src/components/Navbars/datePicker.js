import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateRangePicker from '@mui/lab/MobileDateRangePicker';
import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';


export default function DatePicker() {
    const [value, setValue] = React.useState([null, null]);
  
    return (
      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDateRangePicker
          
          startText="Start-date"
          endText="End-date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <DateRangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize:'large', color:'primary' }} />
              <TextField {...startProps}  variant="standard" size="small" color='warning'  />
              <Box sx={{ mx: 2 }}> to </Box>
              <DateRangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize:'large', color:'primary' }} />
              <TextField {...endProps} variant="standard" size="small" color='warning'/>
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    );
  }

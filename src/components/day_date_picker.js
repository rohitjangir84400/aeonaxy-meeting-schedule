import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';


export default function Datepicker({ setSelectedDate }) {
    const [Date, setDate] = useState(null);
    const handleDateChange = (newDate) => {
        setDate(newDate);
        const day = newDate.format('dddd'); // Day of the week (0-6)
        const month = newDate.format('MMMM'); // Month (0-11, adding 1 to get 1-12)
        const date = newDate.date(); // Day of the month (1-31)
        const year = newDate.year(); // Full year (e.g., 2022)
        const fullpickeddate = day+','+month+' '+date+','+year;
        setSelectedDate(fullpickeddate);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker slotProps={{
                actionBar: {
                    actions: ['clear'],
                },
            }} defaultValue={dayjs('')} openTo="day"
                value={Date}
                onChange={handleDateChange} />
        </LocalizationProvider>
    );
}

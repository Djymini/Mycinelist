import React, {useState, FC} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const TimeFilter: FC<{}> = ({}) => {
    const minDistance = 0;
    const [value1, setValue1] = React.useState<number[]>([1895, 2025]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Box sx={{ width: 'auto', marginTop: '40px', marginLeft: '16px' }}>
          <Slider
              sx={{color: '#E0E1DD'}}
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="on"
            disableSwap
            min={1895}
            max={2025}
          />
    </Box>
    );
};

export default TimeFilter;

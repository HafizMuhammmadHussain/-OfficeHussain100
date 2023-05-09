import { Button, Typography } from '@mui/material';
import React, { Component } from 'react';
class Readystarted extends Component {

    render() {
        return (
            <div style={{ marginTop: '150px', textAlign: 'center' }}>
                <h2 class="headingglobalpartner">
                    Ready to get started?
                </h2>
                <Button sx={{ marginTop: '10px' }} variant="contained">contact us</Button>
            </div>
        );
    }
}

export default Readystarted;
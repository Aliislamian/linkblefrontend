
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
const MyDialog = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>

        {/* <Button variant="contained" style={{ backgroundColor: '#47966B', color: '#919191' }} onClick={handleOpen}>
          Open Dialog
        </Button> */}
        <button onClick={handleOpen} class="mr-[2rem] w-[9rem] bg-transparent hover:bg-[#47966B] text-[#919191] font-semibold hover:text-white py-2 px-4 border border-[#47966B] hover:border-transparent rounded">
          Button
          </button>
        <Dialog open={open} onClose={handleClose}>
        <Button onClick={handleClose}>Cancel</Button>

          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <p>Dialog content goes here.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  export default MyDialog;

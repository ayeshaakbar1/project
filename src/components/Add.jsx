import { Avatar, Box, Fab,  Modal, styled, TextField, Tooltip, Stack, Typography, ButtonGroup, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import MoodIcon from '@mui/icons-material/Mood';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState } from 'react'

const StyledModal = styled(Modal) ({
    display:"flex",
    alignItems:"center",
    justifyContent:"Center"
});

const UserBox = styled(Box) ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom: "20px"
});


const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)}
    title="FAB" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30},
    }}
    >
       <Fab color="primary" aria-label="add">
     <AddIcon />
    </Fab>
    </Tooltip>
    <StyledModal
    open={open}
    onClose={e=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>
     <UserBox>
        <Avatar 
        src='https://media.istockphoto.com/id/1281083606/photo/photo-of-attractive-charming-lady-cute-bobbed-hairdo-arms-crossed-self-confident-person.jpg?s=612x612&w=0&k=20&c=Pr3c_KCEQYE7jSDweq-mLbd-WVD-NdNSwzxG82BFwlw='
        sx={{ width: 30, height: 30}}
         />    
        <Typography fontWeight={500} variant="span">Ayesha Akbar</Typography>
        </UserBox>
        <TextField
           sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
           <MoodIcon color='primary'/>
           <PersonAddAltIcon color='secondary'/>
           <ImageIcon color='success'/>
           <VideoCameraBackIcon color='error'/>
           <KeyboardVoiceIcon color='primary'/>
        </Stack>
        <ButtonGroup fullWidth
        variant="contained" aria-label="outlined primary button group">
       <Button>Post</Button>
       <Button sx={{width:"100px"}}><DateRangeIcon/></Button>
          </ButtonGroup>
       </Box>
       </StyledModal>
  </>
  );
};

export default Add;
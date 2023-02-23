import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Rightbar = () => {
  return (
     <Box  flex={2}  p={2}
      sx={{display: { xs: "none", sm: "block"}}}>

     <Box position="fixed" width={300}>
       <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Online Friends
        </Typography>

       <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1599805610146-J0G5GMGFBXVWND4Z71UK/Aleem+Business+Headshot+for+LinkedIn+Profile.jpg" />
  <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
  <Avatar alt="Cindy Baker" src="" />
  <Avatar alt="Agnes Walker" src="https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Business-portraits-3351.jpg" />
  <Avatar alt="Trevor Henderson" src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1636100249202-5NY98C6ASRIFFPO9GZTU/Tom+Professional+Business+Headshot.jpg?format=500w" />
  <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
  <Avatar alt="Trevor Henderson" src="" />
  <Avatar alt="Trevor Henderson" src="" />
  <Avatar alt="Trevor Henderson" src="" />


       </AvatarGroup>
       <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Photos
        </Typography>
         <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
                <img
                src='https://assets.traveltriangle.com/blog/wp-content/uploads/2016/12/world-famous-Neuschwanstein-Castle.jpg'
                alt=''
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src='https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg'
                alt=''
                />
            </ImageListItem>
            <ImageListItem>
                <img
                src='https://dinoanimals.com/wp-content/uploads/2020/08/Rose.jpg'
                alt=''
                />
            </ImageListItem>
         </ImageList>
         <Typography variant='h6' fontWeight={100} mt={2}>
        Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.studiosami.com/wp-content/uploads/2017/10/Headshot-MontclairNJ-22.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/97/31/02/9731022f0be7c965e880505461643850.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, 
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://thumbs.dreamstime.com/b/profile-photo-young-joyous-lady-wear-orange-t-shirt-isolated-pastel-pink-color-background-profile-photo-young-joyous-lady-233257625.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
              
            </React.Fragment>
          }
          
        />
         </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/c4/a6/ad/c4a6ad3a4bdcd5a8d5425f2afa2f81c6.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Holidays"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
     </Box>
     </Box>
)
}

export default Rightbar;
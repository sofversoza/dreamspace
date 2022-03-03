import React from 'react'
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material'


function Confirm({ props }) {
  const { fullName, username, email, dob, country, bio, website, pronouns } = props;

  return (
    <List sx={{ mt:4 }} disablePadding>
        <ListItem >
          <ListItemText
            primary="Name"
            secondary={ "User's name" || 'Not Provided'}
          />
        </ListItem>

        <Divider sx={{ mb:2 }}/>

        <ListItem>
          <ListItemText
            primary="Username"
            secondary={ "User's username" || 'Not Provided'}
          />
        </ListItem>

        <Divider sx={{ mb:2 }}/>

        <ListItem>
          <ListItemText
            primary="Email Address"
            secondary={ "User's email" || 'Not Provided'}
          />
        </ListItem>

        <Divider sx={{ mb:2 }}/>

        <ListItem>
          <ListItemText
            primary="Pronouns"
            secondary={ "User's pronouns" || 'Not Provided'}
          />
        </ListItem>

        <Divider sx={{ mb:2 }}/>

        <ListItem>
          <ListItemText
            primary="Date of birth"
            secondary={ "User's birthday" || 'Not Provided'}
          />
        </ListItem>

        <Divider sx={{ mb:2 }} />

        <ListItem >
          <ListItemText
            primary="City or Country"
            secondary={ "User's location" || 'Not Provided'}
          />
        </ListItem>
    </List>
  )
}

export default Confirm
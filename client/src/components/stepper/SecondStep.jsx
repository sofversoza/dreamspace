import React, { useState } from 'react'
import { Grid, Box, TextField, Button, InputAdornment, Avatar, Typography } from '@mui/material'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

function SecondStep({ props }) {
  const { pronouns, setPronouns, avatar, setAvatar, country, setCountry, bio, setBio, website, setWebsite } = props;

  return (
    <Box component="form" noValidate sx={{ mt:6, display:'flex', flexDirection:'column', alignItems: 'center' }}>
      <Avatar sx={{ p:2.5 }}>
          <AccountCircleSharpIcon sx={{ width: 94, height: 95, bgcolor: 'primary.main' }} />
      </Avatar>
      <Typography component="body1" variant="h5" sx={{ mb:4, mt:1 }}>
        Pick an avatar
      </Typography>
      <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth autoFocus 
                type="text"
                value={pronouns}
                onChange={(e) => setPronouns(e.target.value)}
                id="pronouns"
                label="Pronouns"
                color="primary"
                placeholder="Ex: she/her"
                sx={{ mb:2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth 
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                label="Country or City"
                placeholder="Enter city or country"
                sx={{ mb:2 }}
                color="primary"
            />
          </Grid>
        </Grid>
        <TextField required fullWidth 
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            id="website"
            label="Website"
            placeholder="www.myportfolio.com"
            sx={{ mb:2 }}
            color="primary"
        />
        <TextField required fullWidth
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            id="bio"
            label="Bio"
            multiline
            rows={2}
            placeholder="A few words about you"
            helperText="200 characters max"
            color="primary"
        />
    </Box>
  )
}

export default SecondStep
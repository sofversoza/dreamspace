import React, { useState } from 'react'
import { Box, Typography, Divider, TextField, Button, Grid, FormLabel } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, Stack, FromLabel, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles'
import PostAddIcon from '@mui/icons-material/PostAdd';

const useStyles = makeStyles((theme) => {
  return {
    form: {
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center'
    }
  }
})

function CreatePost({ user }) {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [highlights, setHighlights] = useState('yes')
  const [post, setPost] = useState({})


  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      title: title,
      body: body,
      tags: tags,
      highlights: highlights,
    };
    fetch('/posts', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    // .then(data => user(data))
  }


  return (
    <div className={classes.form}>  
     <Box sx={{ mt:6, mb:10, mr:10, ml:10 }} maxWidth="md">
        <Typography variant="h2" sx={{mb:3}}>
        Write a new post
        </Typography>   
        
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
        onChange={(e) => setTitle(e.target.value)}
        label="Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        />
        <TextField 
        onChange={(e) => setBody(e.target.value)}
        sx={{ mt:3, mb:2 }}
        label="Body"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        multiline
        rows={18}
        />
        <TextField 
        onChange={(e) => setTags(e.target.value)}
        sx={{ mt:1, mb:3 }}
        label="Tags"
        variant="outlined"
        color="secondary"
        helperText="Max of 5"
        fullWidth
        required
        />
        <FormControl>
        <Stack direction="row" spacing={2} sx={{mt:1}}>
          <FormLabel variant="h2" sx={{mt:1}}>Add to highlights?</FormLabel>
          <RadioGroup row value={highlights} onChange={e => setHighlights(e.target.value)}>   
           <FormControlLabel value="yes" control={<Radio size="small" color="secondary"/>} label="Yes"/>
           <FormControlLabel value="not" control={<Radio size="small" color="secondary"/>} label="No"/>
          </RadioGroup>
          </Stack>
        </FormControl>
        
        <Box sx={{ mt:4 }}>
        <Button variant="contained" color="secondary" type="submit" onClick={handleSubmit} endIcon={<PostAddIcon />}>
            Post Blog
        </Button>
        <Button variant="text" size="large" color="secondary" sx={{ ml:1 }}>
            Archive
        </Button>
        </Box>
    </form>
    </Box>
    </div>
  )
}

export default CreatePost
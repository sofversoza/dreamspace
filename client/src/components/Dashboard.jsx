import React, { useState, useEffect } from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import AddIcon from '@mui/icons-material/Add';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Typography, Paper, Box, Stack, Fab, Tooltip, IconButton, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Masonry from 'react-masonry-css'
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns' 
import BlogCards from './templates/BlogCards'
import ImageCards from './templates/ImageCards';


const useStyles = makeStyles((theme) => {
  return {
    banner: {
      backgroundColor: '#746F95',
      '&:hover': {
        backgroundColor: '#8E8AB7'
      },
      padding: '10px',
    },
  }
})

function Dashboard({ setUser, user, refresh, setRefresh }) {
  const classes = useStyles();
  let navigate = useNavigate();
  const date = new Date(user.created_at)
  const today = new Date();
  const dateFormatted = format(date, "MMMM dd yyyy")
  const todayFormatted = format(today, "PPPP")

  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1,
  }

  return (
    <div>
      {/* WELCOME BANNER */}
      <Box className={classes.banner}>
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
          <Typography variant="body1" color="white">
            Welcome to dreamspace, @{user.username}
          </Typography>
          <CloudIcon color="info" />
          <Typography variant="body1" color="white">
            {todayFormatted}
          </Typography>
        </Stack>
      </Box>

      {/* POSTS */}
      <Box sx={{ mt:5, mb:5, mr:5, ml:5 }}> 
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {user.posts.filter(post => post.content_type === 'blog').map((post) => (
              <div key={ post.id }>
                <BlogCards post={post} refresh={refresh} setRefresh={setRefresh} />
              </div> 
            ))}

            {user.posts.filter(post => post.content_type === 'image').map((post) => (
              <div key={ post.id }>
                <ImageCards post={post} refresh={refresh} setRefresh={setRefresh} />
              </div> 
            ))}

            {user.posts.filter(post => post.content_type === 'blog').map((post) => (
              <div key={ post.id }>
                <BlogCards post={post} refresh={refresh} setRefresh={setRefresh} />
              </div> 
            ))}

            {user.posts.filter(post => post.content_type === 'image').map((post) => (
              <div key={ post.id }>
                <ImageCards post={post} refresh={refresh} setRefresh={setRefresh} />
              </div> 
            ))}
          </Masonry>
      </Box>


      {/* FLOATING BUTTONS */}
      <Box>
        <Stack spacing={0.8} direction="column">
       <Tooltip title="New Post" arrow placement="left">
        <Fab color="secondary" aria-label="add" size="medium"
          sx={{position: 'fixed', 
            bottom:(theme)=> theme.spacing(6), 
            right:(theme)=> theme.spacing(5)}}
            onClick={() => navigate('/createpost')}
          >
          <AddIcon />
        </Fab>
       </Tooltip>
       <Tooltip title="Sort by" arrow placement="left">
        <Fab color="secondary" aria-label="sort" size="medium"
          sx={{position: 'fixed', 
            bottom:(theme)=> theme.spacing(13), 
            right:(theme)=> theme.spacing(5)}}
            onClick={() => navigate('')}
          >
          <SortIcon />
        </Fab>
       </Tooltip>
       <Tooltip title="Filter by" arrow placement="left">
        <Fab color="secondary" aria-label="sort" size="medium"
          sx={{position: 'fixed', 
            bottom:(theme)=> theme.spacing(20), 
            right:(theme)=> theme.spacing(5)}}
            onClick={() => navigate('')}
          >
          <FilterAltIcon />
        </Fab>
       </Tooltip>
       </Stack>
      </Box>
    </div>
  )
}

export default Dashboard
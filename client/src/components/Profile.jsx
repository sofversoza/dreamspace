import '../App.css'
import React, { useState, useEffect } from 'react'
import { Typography, Avatar, Stack, Box, Card, Tooltip, IconButton, Divider, Fab } from '@mui/material';
import { InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { makeStyles } from '@mui/styles'
import header from '../assets/header.png'
import PlaceIcon from '@mui/icons-material/Place';
import ShareIcon from '@mui/icons-material/Share';
import CakeIcon from '@mui/icons-material/Cake';
import StarIcon from '@mui/icons-material/Star';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PushPinIcon from '@mui/icons-material/PushPin';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import AddIcon from '@mui/icons-material/Add';
import { format } from 'date-fns' 
import BlogCards from './templates/BlogCards';
import ImageCards from './templates/ImageCards'
import Masonry from 'react-masonry-css'
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => {
  return {
    header: {
      height:'450px',
      backgroundSize:'cover',
    },
    banner1: {
      padding: '15px',
      paddingLeft: '20px',
    },
  }
}) 

function Profile({ user, setUser, setRefresh, refresh }) {
  const classes = useStyles();
  let navigate = useNavigate();
  const date = new Date(user.created_at)
  const dateFormatted = format(date, "MMMM dd yyyy")
  const [status, setStatus] = useState('')

  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1,
  }

  return (
    <>
      {/* PROFILE HEADER */}
      <div style={{ backgroundImage:`url(${header})`}} className={classes.header}>
       <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
          <Stack spacing={0.8} sx={{ mt:6, alignItems:'center' }}>
            <Avatar sx={{ bgcolor:'#592648', height:'55px', width:'55px', padding:'6px', fontSize:'25px' }}>
              {`${user.full_name.split(' ')[0][0]}${user.full_name.split(' ')[1][0]}`}
            </Avatar>
            <Typography variant="h2">
              {user.full_name}
            </Typography>
            <Typography variant="h4">
              @{user.username}
            </Typography>
            <Typography variant="h4">
              {user.pronouns}
            </Typography>
            <Box sx={{ width:'78%', display:'flex', justifyContent: 'center', flexDirection:'column', textAlign:'center'}}>
              <Typography variant="h4">
                {user.bio}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={0.2} sx={{ mt:3, alignItems:'center' }}>
            <PlaceIcon color="info" />
            <Typography variant="h5" color="textSecondary">
              {user.country}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.2} sx={{ mt:0.5, mb:0.5, alignItems:'center' }}>
            <ShareIcon color="info"/>
            <Typography variant="h5" color="textSecondary">
              {user.website}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.2} sx={{ mt:0.5, alignItems:'center' }}>
            <CakeIcon color="info" sx={{mt:-0.5}}/>
            <Typography variant="h5" color="textSecondary">
              Joined {dateFormatted}
            </Typography>
          </Stack>

          {/* STATUS */}
          <Stack direction="row" spacing={0.2} sx={{ mt:4.5, alignItems:'center' }}>
            <PushPinIcon color="info"/>
            <Typography variant="h3" color="info.main">
              Currently reading "The Idiot" by Fyodor Dostoevsky
            </Typography>
          </Stack>
        </Box>
      </div>

      {/* PROFILE BANNER FOR ICONS */}
      <Box className={classes.banner1} sx={{ flexDirection:'row', justifyContent:'flex-start' }}>
        <Stack direction="row" spacing={1}>
          <Tooltip arrow title="Archives">
            <IconButton onClick={() => navigate('')}>
              <FolderSpecialIcon color="secondary" /> 
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Highlights">
            <IconButton onClick={() => navigate('')}>
              <StarIcon color="secondary" /> 
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Bookmarks">
            <IconButton onClick={() => navigate('')}>
              <BookmarkIcon color="secondary" /> 
            </IconButton>
          </Tooltip>
          <Tooltip arrow title="Statuses">
            <IconButton onClick={() => navigate('')}>
              <PushPinIcon color="secondary" /> 
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      <Divider />

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

      {/* PROFILE DASHBOARD */}
      <div>
        <Box sx={{ mt:3, mb:10, mr:5, ml:5 }}> 
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
      </div>
    </>
  )
}

export default Profile
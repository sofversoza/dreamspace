import React from 'react'
import { Card, CardHeader, CardContent, Typography, IconButton, Button, Tooltip, Divider, CardActions, Grid, Box, CardMedia } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { makeStyles } from '@mui/styles'
import { format } from 'date-fns' 

const useStyles = makeStyles((theme) => {
  return {
    iconbuttons: {
      color: '#8A91C2'
    },
  }
}) 

function BlogCards({ user, post, handleDeletePost, refresh, setRefresh }) {
  const classes = useStyles();
  const date = new Date(post.created_at)
  const dateFormatted = format(date, "MMMM dd yyyy")
  
  function handleDeletePost() {
    fetch('/posts/' + post.id, {
      method: 'DELETE'
    })
    // const newPosts = user.posts.filter(p => p.id != post.id)
    // setUser({ ...user, posts:newPosts })
    setRefresh(!refresh)
  }

  return (
    <div>
      <Card elevation={0}>
        <CardHeader 
          action={
           <Tooltip arrow title="Edit">
             <IconButton aria-label="edit">
               <AutoAwesomeIcon className={classes.iconbuttons}/>
             </IconButton>
           </Tooltip>
          }
          title={<Typography variant="h4">{post.caption}</Typography>}
          subheader={<Typography variant="h6">{dateFormatted}</Typography>}
        />
        <Divider />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.summary}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions sx={{ display: 'flex' }}>
          <Button size="small" color="primary" sx={{ flexGrow: 1 }}>
            Read more
          </Button>
          <Button size="small" color="primary" sx={{ flexGrow: 1 }}
            onClick={handleDeletePost}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default BlogCards
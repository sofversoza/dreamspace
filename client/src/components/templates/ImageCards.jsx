import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Card, CardContent, Typography, IconButton, Button, Tooltip, Divider, CardActions, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { format } from 'date-fns'
import plath from '../../plath'

const useStyles = makeStyles((theme) => {
  return {
    iconbuttons: {
      color: '#8A91C2'
    },
  }
}) 

function ImageCards({ post, handleDeletePost, setRefresh, refresh }) {
  const classes = useStyles();
  const date = new Date(post.created_at)
  const dateFormatted = format(date, "MMMM dd yyyy")
  
  return (
    <div>
      <Card sx={{ maxWidth:305 }} elevation={0}>
        <CardMedia
          component="img"
          height="auto"
          image={plath[`${post.content}`]}
          alt={post.content_type}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {post.caption}
          </Typography>
        </CardContent> 
      </Card>
    </div>
  )
}

export default ImageCards
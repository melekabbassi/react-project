import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'



export default function MovieCard() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='video'
        height="194"
        video={'./media/Valorant 2022.01.29 - 18.52.54.05.DVR_Trim.mp4'}
        alt="Valorant"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

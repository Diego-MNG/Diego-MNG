import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

const MainFeaturedCard = props => {
  const classes = useStyles()
  const { title, date, description, image, path } = props

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={image} alt={title} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {description}
            </Typography>
            <Link to={path} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Continue Lendo
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

MainFeaturedCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
}

export default MainFeaturedCard

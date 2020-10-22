import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">SAPFelix</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">
      <Link to="/menu">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Inicio</button>
    </Link>
        </a></li>
      <li><a href="#">¿Quienes Somos?</a></li>
      <li><a href="#">Acerca de</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span>
      <Link to="/iniciosesion.js">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Iniciar Sesión</button>
    </Link>
      </a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Registrarse</a></li>
    </ul>
  </div>
</nav>



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/frontend/src/imagenes/Jose.jpg"
        />
        <CardContent>
          <Typography component="h2">
            Jose Alejandro Lopez Rojas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Programador,Lider y diseñador.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

 
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/frontend/src/imagenes/Juana.jpg"
      />
      <CardContent>
        <Typography component="h2">
            Juana Velásquez Tobón
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Programador y diseñador.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  return(
 <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image="/frontend/src/imagenes/JoseA.jpg"
      />
      <CardContent>
        <Typography component="h2">
            Jose Alejandro Gonzalez Villa
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Programador y diseñador.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);









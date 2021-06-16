import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from "@material-ui/icons/Tv"
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:"100%",
    position: 'fixed',
    bottom: 0,
    zIndex:100,
    backgroundColor:"#2d313a"
    
  },
});

export const MainNav=()=> {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history=useHistory();



  useEffect(() => {
    switch (value) {
      case 0:
        return history.push("/")
      case 1: 
      return history.push("/movies")
      case 2: 
      return history.push("/series")
      case 3: 
      return history.push("/")
        
      default:
        return history.push("/search")
      }    
  }, [history,value])




  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        }}
      showLabels
      className={classes.root}
    >
        
      <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Tv Series" icon={<TvIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from "@material-ui/icons/Tv"
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    height: "10%",
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

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log(newValue)
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

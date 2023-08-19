

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';

import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import { useNavigate } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  React.useEffect(()=>{
        if (value===0) {navigate("/");}
        else if (value===1) {navigate("/movies")}
        else if (value===2){ navigate("/series")}
        else if (value===3) {navigate("/search")}
  },[value,navigate] )

  return (
    <Box sx={{ width: "100%" ,
    position:"fixed",
    bottom:0,
  
    backgroundColor:'black' ,
    zIndex:100,
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="trending" icon={<WhatshotIcon />} />
         
        
        <BottomNavigationAction
        // style={{ color: "white" }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        // style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        // style={{ color: "white" }}
        label="Search"
        icon={<SearchIcon />}
      />
      </BottomNavigation>
    </Box>
  );
}

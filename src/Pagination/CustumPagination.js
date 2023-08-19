import { Pagination } from '@mui/material'
import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      type: "dark",
      // contrastText: "#303D45"
    },
  });


const CustumPagination=({setPage,numOfPages=10})=> {
const handlepagechange=(page)=>{
    setPage(page);
    window.scroll(0,0);
};

  return (
    <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}>
        <ThemeProvider theme={darkTheme}>
        <Pagination count={numOfPages}
         onChange={(e)=>handlepagechange(e.target.textContent)} 
        hideNextButton 
        hidePrevButton 
        color='primary'/>
        </ThemeProvider>
      
    </div>
  )
}
export default CustumPagination

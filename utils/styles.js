import { makeStyles } from "@material-ui/core";
import { backgroundColor } from "tailwindcss/defaultTheme";

const useStyles = makeStyles({
    underline: {
        "&&&:before": {
          borderBottom: "none"
        },
        "&&:after": {
          borderBottom: "none"
        }
      },

    navbar: {
        backgroundColor: '#EAFFF6',
        height: 75,
        zIndex: 99,
        boxShadow: '5px 10px 18px #2BFDA54D',
        padding: 10,
        '& a': {
            color: '#044566',
            marginLeft: 10,

        }
    },
    textField:{
        borderBottom: '1px solid #00FFA2',
    },
   
    main: {
        minHeight: '100vh',
        height:'100%',
        display:'row',
        minWidth: '100vw',
        backgroundColor: '#EAFFF6'
    },
    
      cssLabel: {
        color : '#044566',
        fontWeight:'light'
       
      },
     
    logo: {
        maxWidth: 160,
      
        
    },
    root: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& .MuiStep-root':{
            width: '30px',
            backgroundColor: 'red',
        },
        '& .MuiStep-horizontal':{
            width: '30px',
            color: 'red',
        },
        '& .MuiTextField-root': {
            margin: 10,
            width: '300px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #00FFA2',

        },
        '& .MuiButtonBase-root': {
            margin: 20,
            width: '300px',
           
        },
         // input label when focused
    "& .MuiFormLabel-root": {
        color: '#61899E',
        fontWeight:'normal !important',
        FontFamily:'Noto Sans'
      },
    "& label.Mui-focused": {
        color: '#61899E'
      },
      // focused color for input with variant='standard'
      "& .MuiInput-underline:after": {
        borderBottomColor: '#00FFA2',
        
      },
    //   // focused color for input with variant='filled'
    //   "& .MuiFilledInput-underline:after": {
    //     borderBottomColor: '#00FFA2',
      
    //   },
    //   // focused color for input with variant='outlined'
    //   "& .MuiOutlinedInput-root": {
    //     "&.Mui-focused fieldset": {
    //       borderColor: '#00FFA2',
          
    //     }
      
      
    },
})
export default useStyles
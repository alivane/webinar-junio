import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    webinarContainer: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      fontSize: 'calc(10px + 2vmin)',
      textAlign: 'center'
    },
    logoStyle: {
        height: '100px',
        pointerEvents: 'none',
        textAlign: 'center'
    },
    webinarHeader: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    webinarBody: {
        backgroundColor: 'white',
        margin: '0 auto',
        padding: '100px',
        display: 'flex',
        height: '100',
        width: '60vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
    },
    table: {
      minWidth: 650,
    },

}));
  

export default useStyles;
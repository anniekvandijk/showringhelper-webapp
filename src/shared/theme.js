
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import lime from '@material-ui/core/colors/lime';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: lime,
    error: red
  }
});

export default theme;

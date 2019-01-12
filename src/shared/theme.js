
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: amber,
    error: red
  }
});

export default theme;

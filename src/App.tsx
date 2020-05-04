import React from "react";
import { Box, Button } from "@material-ui/core";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import SliverPizza from "./app/food/SliverPizza";

// import '../styles/index.css';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        {/* <MuiThemeProvider> */}
        <Box color="text.primary">
          <Button>HELLO</Button>
          <SliverPizza />
        </Box>
        {/* </MuiThemeProvider> */}
      </div>
    );
  }
}

export default App;

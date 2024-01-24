import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './App.css';
import { Timeline } from './timeline';
import { Introduction } from './introduction';
import HeaderBar from './appbar';
import { Contact } from './contact';
import { PhotoComp } from './photoalbum';


function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 12 }}>
        <Grid >
          <Grid item xs={12}>
            <HeaderBar />
            <Introduction />
          </Grid>
          <Grid >
            <Grid item xs={12}>
              <Timeline />
            </Grid>
          </Grid>
          <Grid >
            <Grid item xs={12}>
              <Contact />
            </Grid>
          </Grid>
          <Grid >
            <Grid item xs={12}>
              <PhotoComp />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;

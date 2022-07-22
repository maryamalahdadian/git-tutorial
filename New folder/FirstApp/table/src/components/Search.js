import * as React from 'react';
import { styled, alpha, ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  marginRight: 50,

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),

    boxsizing: 'border-box',


    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    padding: (9, 8),
    gap: 8,

    width: 250,
    height: 36,

    background: '#FFFFFF',
    border: (1, 'solid', '#E0E7ED'),
    borderRadius: 5,

    flex: 'none',
    order: 1,
    flexGrow: 0,
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#BDBDBD',



}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#BDBDBD',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),

    width: 210,
    height: 15,

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,


    color: '#BDBDBD',


    flex: 'none',
    order: 1,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {

        width: 210,
        height: 15,

        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        color: '#BDBDBD',



        flex: 'none',
        order: 1,
        flexGrow: 1,
      },
    },
  },
}));
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F9F9F9',
    },
  },
});

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" enableColorOnDark>
          <Toolbar>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              show    -.............- entrier
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >

            </Typography>
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>

  );
}

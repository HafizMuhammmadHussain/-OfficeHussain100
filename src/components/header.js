import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ForkLeft } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { width } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,

    color: 'black',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',

    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar() {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', }} >
                <Toolbar className="appsize">
                    <Link to="" style={{
                        textDecoration: 'none', color: 'black'
                    }}>
                        <img style={{ marginLeft: '-25px' }} src={require('file:///C:/Users/Hafiz%20M.Hussain/ReactProjects/my-office/src/assets/imagestenPearls.png')}


                            alt='blank' width='100px'
                            height='50px'
                        />
                    </Link>
                    <Grid container
                        style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: 50, color: 'black' }}
                    >
                        <Grid item xs={1} sx={{ marginRight: 2 }}>

                            <Link to="/careers" style={{
                                textDecoration: 'none', color: 'black'
                            }}>
                                Careers
                            </Link>
                        </Grid>
                        <Grid item xs={1} sx={{ marginRight: 3 }}>
                            <Link to="/insights" style={{
                                textDecoration: 'none', color: 'black'
                            }}>

                                Insights
                            </Link>
                        </Grid >
                        <Grid item xs={1} sx={{ marginRight: 1 }}>
                            <Link to="/work" style={{
                                textDecoration: 'none', color: 'black'
                            }}>
                                Work
                            </Link>
                        </Grid>
                        <Grid item xs={1} sx={{ marginRight: 3 }}>
                            <Link to="/services" style={{
                                textDecoration: 'none', color: 'black'
                            }}>
                                Services
                            </Link>
                        </Grid>
                        <Grid item xs={1} sx={{ marginRight: 5 }} >
                            <Link to="/company" style={{
                                textDecoration: 'none', color: 'black'
                            }}>
                                Company
                            </Link>
                        </Grid>
                    </Grid>

                    <Link to="/contact">
                        <Button onClick={() => navigate('/contact')} variant="contained"
                            sx={{
                                backgroundColor: 'white', color: 'black', borderWidth: 1,
                                borderStyle: 'solid', display: 'inline-block', marginLeft: '-35px',
                                backgroundColor: 'white',
                                '&:hover': {
                                    backgroundColor: '#24a0ed'
                                },
                            }}>Contact
                        </Button>


                    </Link>


                    <Search>
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
        </Box >
    );
}

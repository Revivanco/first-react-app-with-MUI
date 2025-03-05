import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

import ImageListItemBar from '@mui/material/ImageListItemBar';





function App() {
  return (
    <div>
      <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>

        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>

  );
}

export default App














const itemData = [
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBHsD562IvyyPgBbk073eu-2mmkhz6r0V-RyW1fnQUL_dllUR-kspRAP8Lia_p5x8D3RHgFwm0XHecgSJXE6h6qDR77oSEaMunADSS25rpkfb9WAIdazjgrLszD9EBpW35lxirQM0qwwF2tZlY0Hj7t3trKHXoLcYRABOcWiYODZYVsaqU-t7hBZiIYRA/s807/elena-mozhvilo-_U_WuzB0zZo-unsplash.jpg",
    title: "journaling"
  },

  {
    img: "https://i.pinimg.com/736x/71/e1/f6/71e1f62c7acc8bace09906019366b989.jpg",
    title: "journalingUna"
  },

  {
    img: "https://i.pinimg.com/736x/d1/0f/22/d10f2246ca81e989b843cb4470546c8c.jpg",
    title: "journalingDos"
  },

  {
    img: "https://i.pinimg.com/736x/f8/02/9f/f8029f1e06761517f395989b13e046c1.jpg",
    title: "journalingTres"
  },

  {
    img: "https://i.pinimg.com/736x/3f/fd/74/3ffd7451a0457b61aafeb80ea21a4eef.jpg",
    title: "journalingCuatro"
  },

  {
    img: "https://i.pinimg.com/736x/73/2a/42/732a42b82c59aa97a3a6f643508fb583.jpg",
    title: "journalingCinco"
  },

  {
    img: "https://i.pinimg.com/736x/06/3a/e0/063ae0ad11fb447a38c048c4b5057444.jpg",
    title: "journalingSeis"
  },

  {
    img: "https://i.pinimg.com/474x/ca/dc/1e/cadc1ef323f7578d25917ef41f799883.jpg",
    title: "journalingSiete"
  },

  {
    img: "https://i.pinimg.com/474x/04/24/d6/0424d648e05c04230ea7fe8740c683a0.jpg",
    title: "journalingOcho"
  },
  {
    img: "https://i.pinimg.com/474x/72/aa/79/72aa794bf95bff240ebdaca5166477a4.jpg",
    title: "journalingNueve"
  },



]
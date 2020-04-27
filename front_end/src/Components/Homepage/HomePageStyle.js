import imageVol from '../../Images/volunteer.png';
import imageNeed from '../../Images/need.png';
import imageDon from '../../Images/donor.png';

export const stylesHomepage = theme => ({

    popover: {
        pointerEvents: 'none',
      },
    paper: {
        padding: theme.spacing(1),
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },

});


export const tileData = [
    {
        img: imageVol,
        title: "volunteer"
    },

    {
        img: imageDon,
        title: "donor"
    },
    
    {
        img: imageNeed,
        title: "need"
    },
];
 
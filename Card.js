import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactSVG } from 'react-svg';
import { GiDatabase } from 'react-icons/gi';
import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { FiEye, FiBookmark } from 'react-icons/fi';
import { Colors } from '../utility/colors';
import User from '../assets/images/profile.svg';

 const CardUi = ({item}) > {
   
   // eslint-disable-next-line no-use-before-define
   const classes = useStyles();

   return (
    
       <Card className={classes.cardContainer}>
         <CardContent style={{ padding: '15px' }}>
           <div className={classes.contentRowSpace}>
             <div className={(classes.contentRow, classes.cardTitle)}>
               <GiDatabase size={20} color={Colors.primaryBlue} /> &nbsp; {item?.title || 'Reddit Recipes'}
             </div>
             <FiBookmark size={25} color={Colors.primaryBlue} fill={Colors.primaryBlue} />
           </div>
           <div className={classes.cardDesc} style={{ width: '80%' }}>
             {item?.desc !== '' && item?.desc ? item?.desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
           </div>
           <Divider />
           <div className={classes.contentRowSpace} style={{ padding: '15px' }}>
             <div className={classes.contentCol}>
               <div className={classes.contentRow}>
                 <StarIcon style={{ fill: Colors.yellow }} />
                 &nbsp;
                 <div className={classes.cardTitle}>4.5 (1457)</div>
               </div>
               <div className={classes.cardTitle} style={{ padding: '15px 0' }}>
                 <FiEye size={20} color={Colors.primaryBlue} /> &nbsp; Public
               </div>
             </div>
             <div className={classes.contentCol}>
               <div className={classes.cardTitle}>2 Days Ago</div>
               <div className={classes.cardTitle} style={{ padding: '15px 0', justifyContent: 'flex-end' }}>
                 Version
               </div>
             </div>
           </div>
           <div className={classes.contentRow} style={{ flexWrap: 'wrap' }}>
             <Chip label="Lorem ipsum" variant="outlined" className={classes.chips} />
             <Chip label="Lorem ipsum" variant="outlined" className={classes.chips} />
             <Chip label="Lorem ipsum" variant="outlined" className={classes.chips} />
           </div>
         </CardContent>

         <Divider />
         <CardActions className={classes.contentRowSpace} style={{ padding: '15px 30px', elevation: 1 }}>
           <div className={classes.cardTitle} style={{ display: 'flex', alignItems: 'center' }}>
           <ReactSVG src={User} /> &nbsp; John Smith
           </div>
           <div className={classes.cardTitle}>Free</div>
         </CardActions>
       </Card>
   );
 };
export default CardUi;


const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    color: Colors.fullBlack,
    margin: '10px 0',
  },
  listWrapper: {
    padding: '25px 25px',
  },
  cardContainer: {
    boxShadow: '0px 0px 4px 1px #00000066',
    textAlign: 'initial',
    borderRadius: 8,
    marginBottom:15
  },
  cardTitle: {
    fontSize: 16,
    color: Colors.lightGray,
    fontWeight: '500',
    // padding: '0 5px',
    // alignItems: 'center',
    display: 'flex',
  },
  cardDesc: {
    fontSize: 14,
    color: Colors.lightGray,
    lineHeight: 1.5,
    // paddingBottom: 5,
    padding: '5px 15px',
  },
  contentCol: {
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentRow: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentRowSpace: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 15px',
  },
  chips: {
    margin: '5px 10px',
  },
}));

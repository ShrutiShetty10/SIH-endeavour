import React from 'react';
import './styles.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
var cardStyle = {
  display: 'block',
  width: '70vw',
  
  height: '15vw'
}
const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, description},
}) => (
  <div className='listItem-wrap'>
   <Card style={cardStyle}>
    <header>
      <h4>{title}</h4>
      <span>This scholarship was created to help students from lower income background to excellence in STEM field</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> 
      </p>
      <p>
        <b>${price}</b>
        
      </p>
    </footer>
    </Card>
  </div>
);

export default ListItem;

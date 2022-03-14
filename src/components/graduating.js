import React, { Component } from 'react'
import Girl from '../assets/graduating_girl.jpg';
import './graduating.css';
import Button from '@mui/material/Button';
export default class Graduating extends Component {
  render() {
    return (
      <div>
          
          <div className='TextBox'>
              
              <div className='Text'>
              Let Your Dreams come True!
                <br/>
                
                Find the best scholarships for you today
                  </div>
              </div>
              <Button variant='contained' color='warning' className='Started'>
                  Get Started
                </Button>
          <img src={Girl} className='Girl'/>
          
      </div>
    )
  }
}

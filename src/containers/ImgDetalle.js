import React, { Component } from 'react';
import ImagenDetalle from '../home.PNG';


export default class ImgDetalle extends Component{
    render(){
        return(
           <div>
            <img src={ImagenDetalle} alt="" className="responsive-img" />
           </div>
        )
    }
}
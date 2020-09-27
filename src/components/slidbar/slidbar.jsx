import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib';
import './slidbar.css'
class Slidbar extends Component {
    state = { 
        img:'',
        count:0,
     }

     componentDidMount(){
            //const count=this.state.count;
            this.image=setInterval(()=>{
           this.changeState()
         },5000)
     }
        ///////////////
        changeState=()=>{
            const count=this.state.count;
            count===4? this.setState({count:0}):this.setState({count:count+1});
        }
        //////////////
        next=()=>{
           this.state.count===4?this.setState({count:0}) :this.setState({count:this.state.count+1})
        }
        //////////////
        prev=()=>{
            this.state.count===0?this.setState({count:4}):this.setState({count:this.state.count-1})
        }
        /////////////

    render() { 
        const arr=[{img:'pg_1.webp',title:'Itroducing The Galaxy S20 FE 5G',color:'#000'},
                   {img:'pg_2.webp',title:'Galaxy Note20 5G | Note20 Ultra 5G',color:'#fff'},
                   {img:'pg_3.webp',title:'Meet The Device Changing the Shape Of the Future',color:'#fff'},
                   {img:'pg_4.webp',title:'Designed for Work Perfect for Play',color:'#000'},
                   {img:'bg_5.webp',title:'Change How You See TV',color:'#fff'}];
        return ( 
               <IconContext.Provider value={{size:40}}>
                    <div className='slidbar-container' style={{backgroundImage:`url(${require('../../img/'+arr[this.state.count].img)})`}}>
                
                <h1 className='title-img' style={{color:`${arr[this.state.count].color}`}}>{arr[this.state.count].title}</h1>
                <p className='par' style={{color:`${arr[this.state.count].color}`,fontSize:'20px',fontWeight:'300',width:'96%',textAlign:'center'}}>Pre-order the all-new Galaxy S20 FE 5G. Get $70 instant credit toward accessories.</p>
                <div className='link_group'>
                    <Link className='link_1' style={{color:`${arr[this.state.count].color}`,borderColor:`${arr[this.state.count].color}`}}>Learn More</Link>
                    <Link className='link_2' style={{color:`${arr[this.state.count].color==='#fff'?'#000':'#fff'}`,backgroundColor:`${arr[this.state.count].color}`}}>Buy Now</Link>
                </div>
                <div className='button_group'>
                    <div className='prev' onClick={this.prev} ><span ><BsChevronLeft/></span></div>
                    <div className='next' onClick={this.next}> <span ><BsChevronRight/></span></div>
                </div>
                
               
                </div>         
               </IconContext.Provider>   
         );
    }
}
 
export default Slidbar;
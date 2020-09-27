import React, { Component } from 'react';
import './navbar.css';
import {navlist_1} from './data';
import {navlist_2} from './data';
import {Link} from 'react-router-dom';
import Navlink from './navlink/navlink';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs';
import {BsPerson} from 'react-icons/bs';
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';
import {BsChevronRight} from 'react-icons/bs'
//import {GrMenu} from 'react-icons/gr';
//import {GrClose} from 'react-icons/gr'



class Navbar extends Component {
    state = { 
        show:false,
        name:'',
        link:[],
        index:0,
        img:'',
        link_1:'',
        link_2:'',
        mobile:false,
        showMobileMenu:false,
     }

     changeMobile=()=>{
       if(window.innerWidth<1150){
        this.setState({mobile:true})
       }else{
        this.setState({mobile:false,showMobileMenu:false});
       }
     }

     componentDidMount(){
      this.screen=this.changeMobile();
      window.addEventListener('resize',this.changeMobile);
     }

    ////////////
     changeState(n){
      this.setState({show:true,name:n.name,link:n.link,index:0,img:n.img,link_1:n.link_1,link_2:n.link_2});
     }
     changeIndex=(ind)=>{
      this.setState({index:ind});
     }
     changeShow=()=>{
       this.setState({show:false})
     }
    ////////////

    render() { 
        return ( 
            <div className='navbar'>
                 <Link className='logo' to='/' onClick={()=>this.setState({show:false})}>SAMSUNG</Link>
                {this.state.mobile===false
                ?<>
                <div className='navlist_1'>
                  {navlist_1.map((n,index)=>n.link.length!==0?<div key={index} className='main' onMouseOver={()=>this.changeState(n)}>{n.name}</div>:<Link key={index} className='link' onMouseOver={()=>this.setState({show:false})}>{n.name}</Link>)}
                </div>
                <div className='navlist_2'>
                {navlist_2.map((n,index)=>n.link.length!==0?<div key={index} className='main' onMouseOver={()=>this.changeState(n)}>{n.name}</div>:<Link key={index} className='link' onMouseOver={()=>this.setState({show:false})}>{n.name}</Link>)}
                </div>
                </>:null
                }
                {this.state.mobile===true?<div className='navlist_3'>
                  <Link className='icon'><AiOutlineShoppingCart/></Link>
                  <Link className='icon'><BsSearch/></Link>
                  <Link className='icon' onClick={()=>this.setState({showMobileMenu:true})}><FiMenu/></Link>
                </div>:<div className='navlist_3'>
                  <Link className='icon'><BsPerson/></Link>
                  <Link className='icon'><AiOutlineShoppingCart/></Link>
                  <Link className='icon'><BsSearch/></Link>
                 
                </div>}
                {this.state.show&&!this.state.mobile? <Navlink obj={this.state} changeIndex={this.changeIndex} changeShow={this.changeShow} />:null}
                 {this.state.mobile&&this.state.showMobileMenu?
                 <div className='nav_mobile'>
                   <GrClose className='close_tap' onClick={()=>this.setState({showMobileMenu:false})}/>
                    <div className='list_mobile'>
                    {navlist_1.map((n,index)=>n.link.length!==0?<div key={index} className='main_mobile' onMouseOver={()=>this.changeState(n)}>{n.name}<BsChevronRight/></div>:<Link key={index} className='link_mobile' onMouseOver={()=>this.setState({show:false})}>{n.name}</Link>)}
                    </div>

                 </div>:null}
            </div>
         );
    }
}
 
export default Navbar;
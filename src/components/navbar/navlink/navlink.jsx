import React, { Component } from 'react';
import {BsChevronRight} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom';
import './navlink.css';
 


class Navlink extends Component {
    state = { 
        links:null,
        name:'',
        ind:0,
     }

    //////////
    /*componentDidMount(){
    //alert(this.props.obj.link[0].links);
    this.firstState=this.setState({links:this.props.obj.link[0].links});
    }*/
    /////////
    changeState(item,index){
        this.setState({links:item.links,name:this.props.obj.name,ind:index})
        this.props.changeIndex(index);
    }
     
    render() { 
        const link=this.props.obj.link;
        return ( 
            <div className='menu'>
                <GrClose className='close-navbar' onClick={this.props.changeShow}/>
                <ul className='list-1 col-3'>
                      <h2 className='title'>{this.props.obj.name}</h2>              
                        {
                        link.map((item,index)=>
                        <div className='row'>
                            <li className={`list-item-1 col-10 ${index===this.props.obj.index?'bold':null}`} key={index} 
                        onMouseMove={()=>this.changeState(item,index)}
                       

                        >{item.title}
                        </li>
                        {index===this.props.obj.index?<span className='col-1'><BsChevronRight/></span>:null}
                        </div>)
                    }
                </ul>
                <ul className='list-2 col-5'>
                {this.state.links===null||this.state.name!==this.props.obj.name?this.props.obj.link[0].links.map(c=><li className='list-item-2'><Link className='link'>{c}</Link></li>):this.state.links.map(c=><li className='list-item-2'><Link className='link'>{c}</Link></li>)}
                </ul>

                <div className='col-4 img-container'>
                    {this.props.obj.img!==null?<img className='img' src={require('../../../img/'+this.props.obj.img)} alt='img' width='100%' height='100%'/>:null }
                {this.props.obj.img!==null?<p>{this.props.obj.link_1}</p>:null}
                {this.props.obj.img!==null?<p>{this.props.obj.link_2}</p>:null}
                </div>
               
                
            </div>
         );
    }
}
 
export default Navlink;
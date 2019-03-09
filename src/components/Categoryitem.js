import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Categoryitem.css';
class Categoryitem extends Component {
    
    constructor(props){
        super(props);
        this.state={
            data: props.data,
            showPopup: false
        };
    }


    render() {
         return (
             <div className="card p-4">
                 <div className="card-block">
                    <img className="rounded-circle z-depth-2 round-img-custom img-responsive" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="Card cap" data-holder-rendered="true"/>
                    <h4 className="card-title card-title-custom">{this.state.data.name} </h4>
                    <div className="three-info-tag">
                        <p className="bg-light text-dark star_ptag"><span><i className="fa fa-star" aria-hidden="true"></i></span>{this.state.data.stargazers_count}</p>
                        <p className="bg-light text-dark star_ptag"><span><i className="fa fa-code-fork" aria-hidden="true"></i></span> {this.state.data.forks}</p>
                        <p className="bg-light text-dark star_ptag"><span><i className="fa fa-info-circle" aria-hidden="true"></i></span> {this.state.data.forks}</p>
                    </div>
                    <p className="card-text card-text-custom">{this.state.data.description}</p>
                    <div className="card-footer card-footer-custom" onClick={()=> window.open(this.state.data.html_url, "_blank")} >VIEW PROFILE</div>
                    {/* onClick={this.openProfile.bind(this,this.state.data.html_url)} */}
                </div>
                
            </div>
        
         );
     }


}

export default Categoryitem;
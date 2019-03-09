import React, { Component } from 'react';
import './App.css';
import Categoryitem from './components/Categoryitem';
class App extends Component {
 
  constructor(props){
    super(props);
     this.state={
      data: '',
      list: [],
      items: [],
      visible: 6,
      error: false
     };

     this.searchQry = '';  
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(){
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }
  
  componentDidMount(){
     
    fetch("https://api.github.com/search/repositories?q=TEST")
    .then(response => response.json())
    .then(json => {
      this.setState({
        data: json,
        items: json.items,
        list:json.items,
      });
    }).catch(err => {
      console.error(err);
      this.setState({
        error: true
      });
    });
    
   }

   getSearchRepo(e){
    this.searchQry = e.target.value;
   }


   submiteQry(e){
     let search = this.searchQry;
    console.log(this.searchQry);
     let updatedList = this.state.items;
        updatedList = updatedList.filter((item) => {
          let poetName = item.name.toLowerCase();
          return poetName.indexOf(
            search.toLowerCase()) !== -1
        })
    


     
   
    this.setState({items: updatedList});
    
   }

  render() {

  
    return (
      <div className="App">
     	 <div className="container container-custom">
        <div className="row border border-primary bg-primary border-bottom-0 "style={{'borderTopLeftRadius':'5px', 'borderTopRightRadius':'5px'}} >
		     	<div className="col-md-12 flot-left" style={{padding:'10px'}}>
           <div className="text-left text-white text-bold"> Git Repo Search Filter </div>
          </div>
       </div>
       <div className="row border border-primary"style={{'borderBottomLeftRadius':'5px', 'borderBottomRightRadius':'5px'}} >
		     	<div className="col-md-12 float-none" style={{padding:'15px'}}>
           <input type="text" className="form-control input-repo-name" onChange={this.getSearchRepo.bind(this)}></input>
           
           <button type="button" className=" btn btn-primary btn-md search-repo-button" onClick={this.submiteQry.bind(this)}>Search</button>
          </div>
       </div>
       <div className="row" >
       <div className="col-md-12" style={{padding:'10px'}}>
              &nbsp;
       </div>
		   </div>
       <div className="row border border-primary bg-primary border-bottom-0 "style={{'borderTopLeftRadius':'5px', 'borderTopRightRadius':'5px'}} >
		     	<div className="col-md-12 flot-left" style={{padding:'10px'}}>
           <div className="text-left text-white text-bold"> Repo Search Result </div>
          </div>
       </div>
       <div className="row border border-primary"style={{'borderBottomLeftRadius':'5px', 'borderBottomRightRadius':'5px'}} >
		     	<div className="card-columns mb-3" style={{padding:'15px'}}>
           {this.state.items.slice(0, this.state.visible).map(function(item , index){
                return(<Categoryitem  data={item} key={index}/>
                );
            })}
          </div>
       </div>
       <div className="row"style={{'borderBottomLeftRadius':'5px', 'borderBottomRightRadius':'5px'}} >
		     	<div className="col-md-12 float-none" style={{padding:'15px'}}>
           <button onClick= {this.loadMore} type="button" className=" btn btn-primary btn-md load-repo-button">Load more</button>
          </div>
       </div>

          {/* {this.state.visible < this.state.data.list.length &&
             <button onClick= {this.loadMore} type="button" className="load-more">Load more</button>
          } */}

        </div>
      </div>
    );
  }
}

export default App;

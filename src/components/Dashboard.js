import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Container from './Container';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      list: [],
      items: [],
      visible: 6,
      error: false,
      dataLoding:true
    };

    this.searchQry = '';
    this.getSearchRepo = this.getSearchRepo.bind(this);
    this.submiteQry = this.submiteQry.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }


    componentDidMount(){
        fetch("https://api.github.com/search/repositories?q=TEST")
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json, 
          items: json.items,
          list: json.items,
          dataLoding:false,
        });
      }).catch(err => {
        console.error(err);
        this.setState({
          error: true,
          dataLoding:false,
        });
      });
    }

    loadMore() {
      this.setState((prev) => {
        return { visible: prev.visible + 3 };
      });
    }

    getSearchRepo(e) {
      this.searchQry = e.target.value;
      if(e.target.value === ''){
        this.setState({ items: this.state.list });
      }else{
        this.submiteQry();
      }
    }

    submiteQry() {
      let search = this.searchQry;
      let updatedList = this.state.items;
      updatedList = updatedList.filter((item) => {
        let poetName = item.name.toLowerCase();
        return poetName.indexOf(
          search.toLowerCase()) !== -1
      })
      this.setState({ items: updatedList });
    }


    render() {
      
        return (
            <div>
              <SearchBar getSearchRepo={this.getSearchRepo} submiteQry={this.submiteQry}/>
              <Container obj={this.state}/>
                {this.state.visible <= this.state.list.length ? 
                <div className="container" style={{ marginTop: '3%' ,marginBottom: '3%'}}>
                  <div className="box">
                    <button type="button" className="btn btn-primary  search-repo-button" onClick={this.loadMore}>Load more</button>
                  </div>
                </div>:null}
            </div>
        );
    }
}

export default Dashboard;
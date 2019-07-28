import React from 'react';
   function SearchBar(props) {
        return (
            <div className="container">
                <div className="box border border-radius border-primary">  
                    <div className="box bg-primary">
                        <div className="github_name_hading">
                                Git Repo Search Filter
                        </div>
                    </div>
                    <div className="box serach-box">
                        <input type="text" className="input-control" style={{ marginRight: '20px' }} onChange={props.getSearchRepo}/>
                        <button type="button" className="btn btn-primary  search-repo-button" onClick={props.submiteQry}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
export default SearchBar;
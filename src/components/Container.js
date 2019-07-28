import React, { Component } from 'react';
import CardView from './CardView';
import NoData from './NoData';

class Container extends Component {


    render() {
        let {obj} = this.props; 
        return (
            <div className="container" style={{ marginTop: '3%' ,marginBottom: '3%'}}>
                    <div className="box border border-radius border-primary">  
                        <div className="box bg-primary">
                            <div className="github_name_hading">
                                     Result
                            </div>
                        </div>
                        {obj.dataLoding ? <NoData msg={"Loding..."}/>
                           :<div className="box">
                                {obj.items.length === 0 ? <NoData msg={"Data Not Found."} />
                                :<div className="card-columns">
                                    {obj.items.slice(0, obj.visible).map(function (item, index) {
                                            return (<CardView data={item} key={index} />
                                            );
                                        })}
                                    </div>
                                }
                            </div>
                        }
                  </div>
            </div>
        );
    }
}

export default Container;
import React from 'react';
   function NoData(props) {
        return (
            <div className="box" style={{height:'250px'}}>
                <h1 style={{marginTop:'200px'}}>{props.msg}</h1>
            </div>
        );
    }


export default NoData;   
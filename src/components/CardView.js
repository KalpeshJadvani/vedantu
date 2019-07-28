import React from 'react';

   function CardView(props) {

        let { data } = props;
        
        return (
            <div className="card">
                <div className="card-block">
                    <img className="rounded-circle round-img-custom img-responsive" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="Card cap" data-holder-rendered="true" />
                    <h4 className="card-title card-title-custom">{data.name}</h4>
                    <div className="three-info-tag">
                        <p className="bg-light text-dark star_ptag"><span><i className="fa fa-star" aria-hidden="true"></i></span>{data.stargazers_count}</p>
                        <p className="bg-light text-dark star_ptag"><span><i className="fa fa-code-fork" aria-hidden="true"></i></span> {data.forks}</p>
                        <p className="bg-light text-dark star_ptag"><span><i className="fa fa-info-circle" aria-hidden="true"></i></span> {data.forks}</p>
                    </div>
                    <p className="card-text card-text-custom">{data.description}</p>
                    <div className="card-footer card-footer-custom" onClick={() => window.open(data.html_url, "_blank")} >VIEW PROFILE</div>
                </div>
            </div>
        );
    }

export default CardView;
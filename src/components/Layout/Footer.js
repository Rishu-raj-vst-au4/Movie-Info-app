import React,{ Component } from "react";


class Footer extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By:
                        <span className="text-warning font-weight-normal">
                            <a href="https://www.linkedin.com/in/rishu-raj-308263172/" target='_blank' rel="noopener noreferrer">
                            Rishu Raj
                            </a>
                        </span>
                        ,Using   <i className="fab fa-react" />   React JS   &amp;   Redux JS Integrated with external movies data API
                        <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
                            OMDB
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;
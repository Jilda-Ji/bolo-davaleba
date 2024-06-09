import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);

    const {id } = useParams();

    useEffect(function() {
        axios.get("https://apitest.reachstar.io/blog/get/").then(function(response) {
            setData(response.data);
        }).catch(function(error) {
            console.log(error);
        })
    })

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        {
                            data.map((item,index) => <div className="card mb-5">
                                <div className="card-header">
                                    <h3 className="card-titel">{ item.titel }</h3>
                                </div>
                                <div className="card-body">
                                    <p dangerouslySetInnerHTML={{__html: item.description}}></p>
                                </div>
                                <div className="card-footer">
                                    <Link to={"/detail/" + item.id} className="btn btn-succses">დეტალურად ნახვა</Link>
                                </div> 
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function login(event){
        event.preventDefault();

        axios.post("https://apitest.reachstar.io/signin",{
            email : email,
            password: password
        }).then(function(response) {
            navigate("/home");
        }).catch(function(error) {
            window.alert("თქვენ ვერ გაიარეთ ავტორიზაცია!");
        });
    }
    
    return(
        <React.Fragment>
            <div className="container mt-4">
                <div className="row jastify-content-senter">
                    <div className="col-6">
                        <form method="POST" onSabmit={(event) => login(event)}>
                            <div className="form-group mt-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}
                                className="form-control" />    
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="form-group d-grid">
                                <input type="submit" className="btn btn-pramery" value="Log in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Login;

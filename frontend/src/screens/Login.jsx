import { useState } from "react"
import { Link ,useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(null);
    let nevigate = useNavigate();
    const HandleSubmit = async(e)=>{
        e.preventDefault()

        const newUser = {email,password}
        const response = await fetch('/api/loginuser',{
            method:'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json();
        if(!response.ok){
            console.log(json.error)
            setError(json.error)
        }
        if(response.ok){
            console.log('user login successfully:',json)
            setError(null)
            setEmail('');
            setPassword('');
            localStorage.setItem('authToken',json.authToken);
            console.log(localStorage.getItem('authToken'));
            nevigate('/')
        }
    }
    return <>
        <div className="container">
            <form onSubmit={HandleSubmit}>
                

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                
                
                <button type="submit" className="btn btn-primary" >Submit</button>
                <Link to='/signup' className="m-3 btn btn-primary">Create an account</Link>
                {/* {error && <div >{error}</div>} */}
            </form>
        </div>
    </>
    
}
export default Login
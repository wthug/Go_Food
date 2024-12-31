import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom";

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [location,setLocation] = useState('');
    const [error,setError] = useState('');
    let nevigate = useNavigate();
    const HandleSubmit = async(e) => {
        e.preventDefault()
        

        const newUser = {name,email,password,location}
        const response = await fetch('/api/creatuser',{
            method:'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json();
        
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError('')
            setEmail('');
            setName('');
            setPassword('');
            setLocation('');
            nevigate('/login');
        }

    }
    return <>
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand fs-4 fst-italic bg-white text-success btn " to="/">GoodFood</Link>
                <Link className="navbar-brand fs-4 ">SignUp Page</Link>
                <Link className="btn bg-white text-success mx-1" to="/login">LogIn</Link>
            </div>
        </nav>
        <div className="container">
            <form onSubmit={HandleSubmit}>
                <div className="mb-3 " >
                    <label for="exampleInputName" className="form-label">Enter your Name</label>
                    <input type="text" className="form-control active" id="exampleInputName" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputAddress" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
                </div>
                
                <button type="submit" className="btn btn-primary" >Submit</button>
                <Link to='/login' className="m-3 btn btn-primary">Already have account</Link>
                
            </form>
            {
                error!=""
                ?<div className="text-danger mt-3 btn border-danger w-100 fs-5">
                    {error}
                </div>
                :""    
            }
        </div>
    </>
}
export default SignUp
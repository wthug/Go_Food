import { useState } from "react"
import { Link ,useNavigate} from "react-router-dom";

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [location,setLocation] = useState('');
    const [error,setError] = useState(null);
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
            console.log(json.error)
            setError(json.error)
        }
        if(response.ok){
            console.log('user SignUp successfully:',json)
            setError(null)
            setEmail('');
            setName('');
            setPassword('');
            setLocation('');
            nevigate('/login');
        }

    }
    return <>
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
                {/* {error && <div >{error}</div>} */}
            </form>
        </div>
    </>
}
export default SignUp
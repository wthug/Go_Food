import { Link  } from "react-router-dom"
import Logout from "../components/Logout"
import { useEffect, useState } from "react"
import Footer from "../components/footer";
import OrderCard from "../components/orderdCard";
const MyOrder = ()=>{
    const [orderData,setOrderData] = useState([]);
    const fetchData = async()=>{
        const email = localStorage.getItem("authEmail");
        const obj = {email};
        const response = await fetch('/api/myOrders',{
            method:'POST',
            body: JSON.stringify(obj),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const json = await response.json()
        if(response.ok) {
            let data=json.Data;
            if(data!=null){
                await setOrderData(json.Data.order_data);
            }
        }
    }
    useEffect(()=>{
        fetchData()
    },[]) 
    return <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">

                <Link className="navbar-brand fs-4 fst-italic" to="/">GoodFood</Link>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active fs-5" to="/">Home</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link className="btn bg-white text-success mx-1" to="/cart">Cart</Link>
                        <Logout/>
                    </div>
                </div>
                </div>
            </nav>  
            <div className="container" style={{"min-height":"39rem"}}>
                
                    { orderData.length===0
                        ?<div className="text-center my-5" style={{"min-height":"33rem"}}>
                            <h4>You haven't order anything yet!!</h4>
                        </div>
                        :orderData.slice(0).reverse().map((data)=>{
                            console.log(data)
                            return <div>
                                <div className=" fs-5 mt-4">
                                    {data[0].Order_date}
                                    <hr></hr>
                                </div>
                                <div className="row">
                                {
                                    data.map((item,index)=>{
                                        if(index>0){
                                            return <div className="col-6 col-md-4 col-lg-3"> 
                                                <OrderCard
                                                    key={index}
                                                    img={item.img}
                                                    name={item.name}
                                                    qty={item.qty}
                                                    size={item.size}
                                                    price={item.price}
                                                />    
                                            </div> 
                                        }
                                    })
                                }
                                </div>
                            </div>
                        })
                    }
                </div>
            
            <Footer/>

        </div>        
    </>
}

export default MyOrder
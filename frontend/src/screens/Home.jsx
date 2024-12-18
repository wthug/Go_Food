
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Carousel from "../components/Carousel"

import { useState,useEffect } from "react"
import FoodCard from "../components/FoodCard";

const Home = () => {
    const [foodItems,setFoodItems] = useState([]);
    const [foodCategory,setFoodCategory] = useState([]);
    const [search , setSearch] = useState("");
    const fetchData = async()=>{
        const response = await fetch('/api/foodData');
        const json = await response.json()
        if(response.ok) {
            const food_category= json[0];
            const food_items=json[1];
            setFoodCategory(food_category)
            setFoodItems(food_items)
        }
    }
    useEffect(()=>{
        fetchData()
    },[]) 

    return <>
        <Navbar/>
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=" className="d-block w-100" alt="..." style={{"max-height":"34rem"}}/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." style={{"max-height":"34rem"}}/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=" className="d-block w-100" alt="..." style={{"max-height":"34rem"}}/>
                    </div>
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form class="d-flex" onSubmit={(e)=>{e.preventDefault()}}>
                            <input class="form-control me-2" type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" aria-label="Search" />
                        </form>
                    </div>  
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                
                
            </div>
        </>
        <>
            <div className="m-2">
                {
                    foodCategory !== [] 
                    ? foodCategory.map((foodCat)=>{
                        return<div >
                            <div className="p-1 m-1 fs-3 ">{foodCat.CategoryName} </div>
                            <div className="row mb-3" >
                            {
                                foodItems !== []
                                ? foodItems.filter((item)=>(item.CategoryName === foodCat.CategoryName ) && item.name.toLowerCase().includes(search)).map((foodItem)=>{
                                    return(
                                        <div className="col-12 col-md-6 col-lg-3">
                                        <FoodCard
                                            key={foodItem._id}
                                            food={foodItem}
                                        />
                                        </div>
                                    )
                                })
                                : "No food Items"
                            }
                            </div>
                        </div>
                    })
                    : "No Food category"
                } 
            </div>
        </>
        <Footer/>
    </>
}
export default Home
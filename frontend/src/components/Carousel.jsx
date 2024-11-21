
const Carousel = () => {
    return <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=" className="d-block w-100" alt="..." style={{"max-height":"34rem"}}/>
                </div>
                <div className="carousel-item">
                <img src="../static/photos/img1.jpg" className="d-block w-100" alt="..." style={{"max-height":"34rem"}}/>
                </div>
                <div className="carousel-item">
                <img src="https://picsum.photos/seed/picsum/200/70" className="d-block w-100" alt="..." style={{"max-height":"34rem"}}/>
                </div>
                <div className="carousel-caption" style={{zIndex:"10"}}>
                    <form class="d-flex" onSubmit={(e)=>{e.preventDefault()}}>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
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
}

export default Carousel
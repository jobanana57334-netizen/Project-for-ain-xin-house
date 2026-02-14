const Navbar=()=>{
    return (
        <>
            <div>
                <nav className="navbar navbar-light bg-light" style={{position:"fixed" ,width:"100%",height:"8%",zIndex:"10",top:"0",right:"0"}} >
                    <div className="container-fluid">
                    
                    <span className="navbar-brand ms-5">
                        <i className="bi bi-house-heart" style={{
                            color:"#D4AB6A",
                            width:"54px",
                            height:"44px"}}></i> 安心窩
                    </span>
                    <form className="d-flex">
                        <button className="btn btn-outline-success top-button" type="submit">
                        註冊/登入
                        </button>
                        
                        <button className="navbar-toggler custom-toggler ms-3 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="toggler-bar"></span>
                        <span className="toggler-bar"></span>
                        <span className="toggler-bar"></span>
                        </button>
                    </form>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
import './estilos.css'

const Header= () =>{
    return(
        <header className='w-100'>
            <h1 className='font-weight-bold text-center'>Superlist</h1>
            <div className="d-flex w-100 align-items-center justify-content-evenly">
             <h2 className='text-decoration-underline'>List</h2> <h2>Tag</h2>
            </div> 
        </header>
    )
}

export default Header
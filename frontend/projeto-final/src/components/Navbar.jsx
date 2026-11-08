import {Link} from 'react-router-dom'

function Navbar () {
    return (
    <>
    <section id='navbarHeader'>
        
        <div id="navbar">
            <Link to='/' className="navbarItems">Pagina Inicial</Link>
            <Link to='/feed' className="navbarItems">Feed</Link>
            <Link to='/perfil' className="navbarItems">Perfil</Link>
            <Link to='/configuracoes' className="navbarItems">Configurações</Link>
        </div>
        
    </section>   
        
    </>)
}

export default Navbar;
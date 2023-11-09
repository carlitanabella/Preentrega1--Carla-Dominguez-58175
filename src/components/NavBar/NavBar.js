import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logotipo/Logo"
import Breadcrumbs from '@mui/material/Breadcrumbs';

const NavBar = () => {
    return (
        <nav style={{backgroundColor: '#F0E8D8', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <h1 style={{justifyContent: 'araund', marginRight: '200px'}} >
                <Logo />
            </h1>
           
            <ul style={{display: 'flex', justifyContent: 'center', alignContent: 'center', marginRight: '200px'}}>
            <Breadcrumbs separator="/"  maxItems={2} aria-label="breadcrumb">
                <li   underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Muebles</li>
                <li   underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Linea Blanco</li>
                <li  underline="hover" color="inherit" href="#" style={{ listStyleType: "none" }}>Almohadones</li>
            </Breadcrumbs>

            
            </ul>
            <h1 style={{justifyContent: 'araund', marginLeft: '100px'}}>
                <CartWidget />
            </h1>
            
            
        </nav>
    )
}

export default NavBar
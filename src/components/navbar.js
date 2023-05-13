import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Logo from "../logo/mylogo.png";
import "./navbar.css"
class MyNavbar extends React.Component {

    constructor(){
        super()
        this.state={
            home:true,
            about:false,
            gallery: false,
            contact: false,
            blog: false

    
        }

    }

chgclass =(chk)=>{
   
    if(chk=="Home"){
        this.setState({
            home:true,
            about:false,
            gallery: false,
            contact: false,
            blog: false
        })
    }
    else   if(chk=="About"){
    this.setState({
        home:false,
        about:true,
        gallery: false,
        contact: false,
        blog: false
        })
    }

    else  if(chk=="Gallery"){
        this.setState({
            home:false,
            about:false,
            gallery: true,
            contact: false,
            blog: false
        })
    }

    else  if(chk=="Contact"){
        this.setState({
            home:false,
            about:false,
            gallery: false,
            contact: true,
            blog: false
        })
    }
    else  if(chk=="Blog"){
        this.setState({
            home:false,
            about:false,
            gallery: false,
            contact: false,
            blog: true
        })
    }


}


   



    render() {

        return (
            <>
                
            <Navbar collapseOnSelect expand="lg" bg="light"  fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Logo} alt="Logo" width={200} height={60} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ">
                            
                                {
                                    this.state.home == true ?
                                    <Nav.Link>  <Link className="mx-3 newclass underline" to={"/"}  onClick={()=>this.chgclass("Home")}>Home </Link></Nav.Link> 
                                    :
                                    <Nav.Link>  <Link className="mx-3 newclass" to={"/"}  onClick={()=>this.chgclass("Home")}>Home </Link></Nav.Link> 
                                }
                                 
                        
                                {
                                    this.state.about == true ?
                                    <Nav.Link>  <Link className="mx-3 newclass underline" to={"/About"}  onClick={()=>this.chgclass("About")}>About </Link></Nav.Link> 
                                    :
                                    <Nav.Link>  <Link className="mx-3 newclass" to={"/About"}  onClick={()=>this.chgclass("About")}>About </Link></Nav.Link> 
                                }

                                {
                                    this.state.shop == true ?
                                    <Nav.Link>  <Link className="mx-3 newclass underline" to={"/shop"}  onClick={()=>this.chgclass("Shop")}>Shop </Link></Nav.Link> 
                                    :
                                    <Nav.Link>  <Link className="mx-3 newclass" to={"/gallery"}  onClick={()=>this.chgclass("Gallery")}>Gallery </Link></Nav.Link> 
                                }
                                {
                                    this.state.contact == true ?
                                    <Nav.Link>  <Link className="mx-3 newclass underline" to={"/contact"}  onClick={()=>this.chgclass("Contact")}>Contact </Link></Nav.Link> 
                                    :
                                    <Nav.Link>  <Link className="mx-3 newclass" to={"/contact"}  onClick={()=>this.chgclass("Contact")}>Contact </Link></Nav.Link> 
                                }
                                {
                                    this.state.blog == true ?
                                    <Nav.Link>  <Link className="mx-3 newclass underline" to={"/blog"}  onClick={()=>this.chgclass("Blog")}>Blog </Link></Nav.Link> 
                                    :
                                    <Nav.Link>  <Link className="mx-3 newclass" to={"/blog"}  onClick={()=>this.chgclass("Blog")}>Blog </Link></Nav.Link> 
                                }
                            
                           
                                
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets" className="newclass">Sign in here?</Nav.Link>
                                <Button variant="primary">Login</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 

            </>
        )
    }
}

export default MyNavbar;
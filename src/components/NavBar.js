import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Korpa from './Korpa';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <header className="header1">

                    <div className="container-menu-header ">
                        <div className="topbar">
                            <div className="topbar-social">
                                <Link to='/' className="topbar-social-item fa fa-facebook"></Link>
                                <Link to='/' className="topbar-social-item fa fa-instagram"></Link>
                                <Link to='/' className="topbar-social-item fa fa-pinterest-p"></Link>
                                <Link to='/' className="topbar-social-item fa fa-snapchat-ghost"></Link>
                                <Link to='/' className="topbar-social-item fa fa-youtube-play"></Link>
                            </div>

                            <span className="topbar-child1">
                                Neka lepa porukica da stoji ovde
				</span>

                            <div className="topbar-child2">
                                <span className="topbar-email">
                                    neki@vas.com
					</span>
                            </div>
                        </div>



                    </div>
                </header>

                <Navbar color="faded" light expand="md">
                    <NavbarBrand ><Link to="/" >
                        <img src="images/icons/logo.png" alt="IMG-LOGO"  />
                    </Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto mr-auto" navbar >

                            <NavItem >
                                <NavLink ><Link className='Link' to='/'>Home</Link></NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink ><Link className='Link' to='/product'>Shop</Link></NavLink>

                            </NavItem>
                            <NavItem >
                                <NavLink ><Link className='Link' to='/product/sale' style={{color: 'red'}}>Sale</Link></NavLink>

                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <Link className='Link' to='/product/lingerie'>Lingerie</Link>

                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link className='Link' to='/product/lingeriev1'>Lingerie V1</Link>

                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link className='Link' to='/product/lingeriev2'>Lingerie V2</Link>

                                    </DropdownItem>

                                    <DropdownItem>
                                        <Link className='Link' to='/product/lingeriev3'>Lingerie V3</Link>

                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem >
                                <NavLink><Link className='Link' to='/about'>About</Link></NavLink>

                            </NavItem>
                            <NavItem >
                                <NavLink><Link className='Link' to='/contact'>Contact</Link></NavLink>

                            </NavItem>
                        </Nav>
                        <div className=' far fa-2x fa-user mr-4' to='/' style={{ float: 'right' }} ></div>
                        <Korpa />
                    </Collapse>


                </Navbar>


            </div>
        )
    }
}

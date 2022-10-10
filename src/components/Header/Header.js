import { logDOM } from '@testing-library/react';
import logo from './logo.png'
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

const Header = () => {

    return (

        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Quiz Master Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-bold text-blue-600 dark:text-blue-500">
                    Quiz Master
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                >
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link href="/statistics">
                    <Link to='/statistics'>Statistics</Link>

                </Navbar.Link>
                <Navbar.Link href="/blog">
                    <Link to='/blog'>Blog</Link>
                </Navbar.Link>
                <Navbar.Link href="/contact">
                    <Link to='/contact'>Contact</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Header;
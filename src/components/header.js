import React from 'react';
import Button from './atoms/button';
import logo from '../logo.svg';

function Header(){
    return (
        <header>
            {/* <img class="App-logo" alt="Logo" src={logo} /> */}
            <Button type="submit" class="button" label="SEARCH" />
            <input type="text" />
            <input type="text" />
        </header>
    )
}

export default Header;
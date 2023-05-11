import React from 'react';

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand bg-dark navbar-dark'>
      <div className='container'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                {props.loggedIn ?  'Log Out' : 'Home'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

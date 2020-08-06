import React, { useState } from 'react';
import './Navigation.css';

// Importing Router Link //
import { Link } from 'react-router-dom';

/* Importing Icons */
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as OfficeIcon } from '../icons/office.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import { ReactComponent as ProfileIcon } from '../icons/Profile.svg';
import { ReactComponent as AboutIcon } from '../icons/About.svg';
import { ReactComponent as HomeIcon } from '../icons/Home.svg';

/* Importing CSSTransition */
import { CSSTransition } from 'react-transition-group';

function Navigation() {
  return (
<Navbar>
  <Link className="Link" to="/about">
  <Navitem icon={<AboutIcon />}/>
  </Link>
  <Link className="Link" to="/"> 
  <Navitem icon={<HomeIcon />} />
  </Link>
  <Navitem icon={<BellIcon />} />
  <Navitem icon={<OfficeIcon />} />
  <Navitem icon={<CaretIcon />}>
<DropdownMenu />
  </Navitem>
</Navbar>
  );
}

function Navbar(props) {
  return (
   <nav className="navbar">
<ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function Navitem(props) {
  const [ open, setOpen ] = useState(false); // to turn on and off the bar //

  return (
   <li className="nav-item">
<p className="icon-button" onClick={()=> setOpen(!open)}>
  {props.icon}
</p>
 { open && props.children }
    </li>
  );
}

function DropdownMenu() {

  const [ activeMenu, setActiveMenu ] = useState('main');
  const [ menuHeight, setMenuHeight ] = useState(null); // to change height //
  
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <p className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}> 
<span className="icon-button">{props.leftIcon}</span>
{props.children}
<span className="icon-right">{props.rightIcon}</span>
      </p>
    );
  }
  return (
<div className="drop-down"  styles={{ height: menuHeight }}>
  <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} 
  classNames="menu-primary"
  onEnter={calcHeight}
  >
<div className="menu">
<DropdownItem leftIcon={<ProfileIcon />}>My Account</DropdownItem>
<DropdownItem
leftIcon={<CogIcon />}
rightIcon={<ChevronIcon />}
goToMenu="settings"
>
  Settings
</DropdownItem>
</div>
</CSSTransition>

<CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500}
 classNames="menu-secondary" onEnter={calcHeight}>
<div className="menu">
<DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
<DropdownItem leftIcon={<BoltIcon />}>Update Information</DropdownItem>
</div>
</CSSTransition>
</div>
  );
}
 
export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
const menuItems = [
    { title: 'menu 1', items: [
        { menuitem: 'menu 1-1', link: 'link1'},
        { menuitem: 'menu 1-2', link: 'link2'},
        { menuitem: 'menu 1-3', link: 'link3'},
        { menuitem: 'menu 1-4', link: 'link4'},
        ]
    },
    { title: 'menu 2', items: [
        { menuitem: 'menu 2-1', link: 'link1'},
        { menuitem: 'menu 2-2', link: 'link2'},
        { menuitem: 'menu 2-3', link: 'link3'},
        { menuitem: 'menu 2-4', link: 'link4'},
        ]
    },
    { title: 'menu 3', items: [
        { menuitem: 'menu 3-1', link: 'link1'},
        { menuitem: 'menu 3-2', link: 'link2'},
        { menuitem: 'menu 3-3', link: 'link3'},
        { menuitem: 'menu 3-4', link: 'link4'},
        ]
    },
    { title: 'menu 4', items: [
        { menuitem: 'menu 4-1', link: 'link1'},
        { menuitem: 'menu 4-2', link: 'link2'},
        { menuitem: 'menu 4-3', link: 'link3'},
        { menuitem: 'menu 4-4', link: 'link4'},
        ]
    }
]
  return (
    <nav>
        { menuItems.map( item => {
            return ( 
                    <div className='dropdown' key={ item.title }>
                        <div className='dropbtn'>{ item.title }</div>
                        <div className='dropdown-content'>
                            { item.items.map( subitem => {
                                return ( 
                                    <Link to={ `/products/${ subitem.link }` } key={ subitem.menuitem }>{ subitem.menuitem }</Link>
                                    )
                            } ) }
                        </div>
                    </div>
                )
        } ) }
    </nav>
  );
};
export default Nav;
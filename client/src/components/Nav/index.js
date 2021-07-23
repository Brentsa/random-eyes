import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
const menuItems = [
    { title: 'Hair', items: [
        { menuitem: 'Hair Equipment', link: 'link1'},
        { menuitem: 'Hair Care', link: 'link2'},
        { menuitem: 'Hair Tools', link: 'link3'},
        { menuitem: 'Hair Accessories', link: 'link4'},
        ]
    },
    { title: 'Spa', items: [
        { menuitem: 'Skin Care', link: 'link1'},
        { menuitem: 'Hand & Foot Care', link: 'link2'},
        { menuitem: 'Waxing', link: 'link3'},
        { menuitem: 'Spa Essentials', link: 'link4'},
        ]
    },
    { title: 'Cosmetic', items: [
        { menuitem: 'Face Make Up', link: 'link1'},
        { menuitem: 'Face Care', link: 'link2'},
        { menuitem: 'Lashes', link: 'link3'},
        { menuitem: 'Accessories', link: 'link4'},
        ]
    },
    { title: 'Barber', items: [
        { menuitem: 'Clippers & Trimmers', link: 'link1'},
        { menuitem: 'Barber Accessories', link: 'link2'},
        { menuitem: 'Brushes & Comb', link: 'link3'},
        { menuitem: 'Scissors & Blades', link: 'link4'},
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
import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
const menuItems = [
    { title: 'New Arrivals', items: [
        { menuitem: 'Hair', link: 'link1'},
        { menuitem: 'Spa', link: 'link2'},
        { menuitem: 'Cosmetic', link: 'link3'},
        { menuitem: 'Accessories', link: 'link4'},
        ]
    },
    { title: 'Promotions', items: [
        { menuitem: 'Equipment', link: 'link1'},
        { menuitem: 'Hair', link: 'link2'},
        { menuitem: 'Spa', link: 'link3'},
        { menuitem: 'Barber', link: 'link4'},
        ]
    },
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
        { menuitem: 'Spa Essentials', link: 'link4'},
        ]
    },
    { title: 'Waxing', items: [
        { menuitem: 'Equipment', link: 'link1'},
        { menuitem: 'Hard & Soft Wax', link: 'link2'},        
        { menuitem: 'Waxing Essentials', link: 'link4'},
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
    },
    { title: 'Brand', items: [
        { menuitem: 'BabylissPro', link: 'link1'},
        { menuitem: 'Wahl', link: 'link2'},
        { menuitem: 'Caronlab', link: 'link3'},
        { menuitem: 'Sorme', link: 'link4'},
        
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
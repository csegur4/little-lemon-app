import  Logo from './images/logo.webp'
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
  } from '@chakra-ui/react'

export default function Nav(){

    const [open, setOpen] = useState(false);

    return(
        <nav>
            <div className="menu container mx-auto">
                <div>
                    <a href="/">
                        <img src={Logo} alt="Little Lemon Restaurant Logo" width={200}/>
                    </a>
                </div>
                <div className='hidden md:block'>
                    <ul>
                        <li><a href="/" className="hover:text-gray-600">Home</a></li>
                        <li><a href="/about" className="hover:text-gray-600">About</a></li>
                        <li><a href="/menu" className="hover:text-gray-600">Menu</a></li>
                        <li><a href="/reservations" className="hover:text-gray-600">Reservations</a></li>
                        <li><a href="/order-online" className="hover:text-gray-600">Order Online</a></li>
                        <li><a href="/login" className="hover:text-gray-600">Log In</a></li>
                    </ul>
                </div>
                <div className='md:hidden'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={open ? <AiOutlineClose size='35px' onClick={()=> setOpen(!open)}/> : <AiOutlineMenu size='35px' onClick={()=> setOpen(!open)} />   }
                            variant='outline'

                        />
                        <MenuList
                        w="100vw"
                        bgColor="#333333e8"
                        h="40vh"
                        color="#fff"
                        fontSize="23px"
                        p="20px"
                        >
                            <MenuItem justifyContent="center" mb="15px" pt="20">
                                Home
                            </MenuItem>
                            <MenuItem justifyContent="center" mb="15px" >
                                About
                            </MenuItem>
                            <MenuItem justifyContent="center" mb="15px">
                                Menu
                            </MenuItem>
                            <MenuItem justifyContent="center" mb="15px">
                                Reservations
                            </MenuItem>
                            <MenuItem justifyContent="center" >
                                Order Online
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}
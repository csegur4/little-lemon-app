import  Logo from './images/logo.webp'
import {AiOutlineMenu} from 'react-icons/ai';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Flex
  } from '@chakra-ui/react'

export default function Nav(){
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
                            icon={<AiOutlineMenu size='20px' />}
                            variant='outline'
                        />
                        <MenuList
                        w="100vw"
                        bgColor="#808080b8"
                        h="100vh"
                        >
                            <MenuItem>
                                Home
                            </MenuItem>
                            <MenuItem>
                                About
                            </MenuItem>
                            <MenuItem>
                                Menu
                            </MenuItem>
                            <MenuItem>
                                Reservations
                            </MenuItem>
                            <MenuItem>
                                Order Online
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </nav>
    )
}
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDashboard, MdAssignment, MdInsertChart, MdSettings } from 'react-icons/md';

const SideNavContainer = styled.nav<{ isVisible: boolean }>`
  width: 250px;
  background: rgba(255, 255, 255, 0.9);
  height: calc(100vh - 64px);
  padding: 1rem;
  position: fixed;
  left: ${({ isVisible }) => isVisible ? '0' : '-250px'};
  transition: left 0.3s ease-in-out;
  z-index: 999;

  h2 {
    color: #2E7D32;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const MenuLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  svg {
    margin-right: 0.75rem;
    font-size: 1.25rem;
    color: #2E7D32;
  }

  &:hover {
    background-color: rgba(76, 175, 80, 0.1);
    color: #4CAF50;
    transform: translateX(5px);

    svg {
      color: #4CAF50;
    }
  }
`;

const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: <MdDashboard />, text: 'Dashboard', link: '/dashboard' },
  { icon: <MdAssignment />, text: 'Projects', link: '/projects' },
  { icon: <MdInsertChart />, text: 'Reports', link: '/reports' },
  { icon: <MdSettings />, text: 'Settings', link: '/settings' },
];

const Sidebar = ({ isVisible, onClose }: SidebarProps) => {
  return (
    <>
      <Overlay isVisible={isVisible} onClick={onClose} />
      <SideNavContainer 
        isVisible={isVisible}
        onMouseLeave={onClose}
      >
        <h2>Menu</h2>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <MenuLink to={item.link}>
                {item.icon}
                {item.text}
              </MenuLink>
            </li>
          ))}
        </ul>
      </SideNavContainer>
    </>
  );
};

export default Sidebar; 
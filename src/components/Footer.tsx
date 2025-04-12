import styled from 'styled-components';

const FooterContainer = styled.footer<{ sidebarVisible: boolean }>`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  margin-left: ${({ sidebarVisible }) => sidebarVisible ? '250px' : '0'};
  transition: margin-left 0.3s ease-in-out;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h4 {
    margin-bottom: 1rem;
    color: #2E7D32;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #333;

    &:hover {
      color: #4CAF50;
    }
  }
`;

interface FooterProps {
  sidebarVisible: boolean;
}

const Footer = ({ sidebarVisible }: FooterProps) => {
  return (
    <FooterContainer sidebarVisible={sidebarVisible}>
      <FooterContent>
        <FooterSection>
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Products</h4>
          <ul>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/docs">Documentation</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Resources</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/api">Developer API</a></li>
            <li><a href="/status">Status</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Contact</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/sales">Sales</a></li>
            <li><a href="/locations">Office Locations</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 
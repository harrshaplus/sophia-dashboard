import styled from 'styled-components';
import ImageGallery from './ImageGallery';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.main<{ sidebarVisible: boolean }>`
  flex-grow: 1;
  padding: 2rem;
  margin-left: ${({ sidebarVisible }) => sidebarVisible ? '250px' : '0'};
  transition: margin-left 0.3s ease-in-out;
  width: calc(100% - ${({ sidebarVisible }) => sidebarVisible ? '250px' : '0'});
  display: flex;
  gap: 2rem;
`;

const ContentSection = styled.div`
  flex: 1;
`;

const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Widget = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;

  h3 {
    color: #2E7D32;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    color: #333;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ActionButton = styled.button`
  background: #4CAF50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: #388E3C;
  }
`;

const PopularBadge = styled.span`
  background: #FF6B6B;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

interface MainContentProps {
  sidebarVisible: boolean;
}

const dummyContent = [
  {
    title: "Analytics Dashboard",
    content: "Track your key performance indicators and metrics in real-time. Monitor user engagement, conversion rates, and other critical data points to make informed decisions.",
    list: ["Daily active users", "Conversion rate", "Revenue metrics", "User engagement"],
    hasButton: true,
    isPopular: true,
    route: '/projects/analytics'
  },
  {
    title: "Project Management",
    content: "Streamline your workflow with our comprehensive project management tools. Assign tasks, track progress, and collaborate with team members efficiently.",
    list: ["Task tracking", "Team collaboration", "Deadline management", "Resource allocation"],
    hasButton: true,
    isPopular: true,
    route: '/projects/management'
  },
  {
    title: "Customer Insights",
    content: "Gain valuable insights into your customer behavior and preferences. Analyze patterns and trends to improve your service delivery and customer satisfaction.",
    list: ["Behavior analysis", "Feedback metrics", "Satisfaction scores", "Engagement rates"],
    hasButton: true,
    route: '/projects/insights'
  },
  {
    title: "Resource Planning",
    content: "Optimize your resource allocation and planning with our advanced tools. Ensure efficient utilization of assets and personnel across your organization.",
    list: ["Resource tracking", "Capacity planning", "Budget allocation", "Performance metrics"],
    hasButton: true,
    isPopular: true,
    route: '/projects/planning'
  },
  {
    title: "Marketing Campaigns",
    content: "Plan and execute your marketing campaigns effectively. Track campaign performance and ROI across multiple channels and platforms.",
    list: ["Campaign metrics", "ROI analysis", "Channel performance", "Audience targeting"]
  },
  {
    title: "Financial Overview",
    content: "Monitor your financial health with comprehensive reporting and analytics. Track expenses, revenue, and other key financial indicators.",
    list: ["Revenue tracking", "Expense analysis", "Budget monitoring", "Financial forecasting"]
  },
  {
    title: "Team Performance",
    content: "Track and optimize your team's performance with detailed analytics and insights. Identify areas for improvement and celebrate successes.",
    list: ["Performance metrics", "Goal tracking", "Productivity analysis", "Team collaboration"]
  },
  {
    title: "Product Development",
    content: "Monitor your product development lifecycle from ideation to launch. Track progress, manage resources, and ensure quality delivery.",
    list: ["Development timeline", "Quality metrics", "Resource utilization", "Release planning"]
  },
  {
    title: "Support Statistics",
    content: "Track customer support metrics and performance indicators. Ensure high-quality service delivery and customer satisfaction.",
    list: ["Response times", "Resolution rates", "Customer satisfaction", "Support volume"]
  },
  {
    title: "Infrastructure Status",
    content: "Monitor your infrastructure health and performance. Track system uptime, resource utilization, and maintenance schedules.",
    list: ["System uptime", "Resource usage", "Maintenance logs", "Performance metrics"]
  },
  {
    title: "Learning & Development",
    content: "Track employee training and development progress. Monitor skill development and certification completion across your organization.",
    list: ["Training progress", "Skill assessment", "Certification tracking", "Learning paths"]
  },
  {
    title: "Compliance Dashboard",
    content: "Stay on top of regulatory requirements and compliance standards. Monitor and track compliance-related tasks and documentation.",
    list: ["Compliance tracking", "Document management", "Audit trails", "Risk assessment"]
  },
  {
    title: "Innovation Hub",
    content: "Track and manage innovation initiatives across your organization. Monitor ideation, development, and implementation of new projects.",
    list: ["Idea tracking", "Project progress", "Resource allocation", "Success metrics"]
  },
  {
    title: "Quality Assurance",
    content: "Monitor quality metrics and standards across your operations. Ensure consistent delivery of high-quality products and services.",
    list: ["Quality metrics", "Testing results", "Compliance rates", "Improvement tracking"]
  }
];

const MainContent = ({ sidebarVisible }: MainContentProps) => {
  const navigate = useNavigate();

  const handleLearnMore = (route: string) => {
    navigate(route);
  };

  return (
    <MainContainer sidebarVisible={sidebarVisible}>
      <ContentSection>
        <WidgetGrid>
          {dummyContent.map((widget, index) => (
            <Widget key={index}>
              <h3>
                {widget.title}
                {widget.isPopular && (
                  <PopularBadge>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Popular
                  </PopularBadge>
                )}
              </h3>
              <p>{widget.content}</p>
              <ul>
                {widget.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {widget.hasButton && (
                <ActionButton onClick={() => handleLearnMore(widget.route)}>
                  Learn More
                </ActionButton>
              )}
            </Widget>
          ))}
        </WidgetGrid>
      </ContentSection>
      <ImageGallery />
    </MainContainer>
  );
};

export default MainContent; 
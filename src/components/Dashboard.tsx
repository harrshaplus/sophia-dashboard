import styled from 'styled-components';
import { MdTrendingUp, MdPeople, MdAssignment, MdTimeline } from 'react-icons/md';

interface ContainerProps {
  sidebarVisible: boolean;
}

const DashboardContainer = styled.div<ContainerProps>`
  flex-grow: 1;
  padding: 2rem;
  margin-left: ${({ sidebarVisible }) => sidebarVisible ? '250px' : '0'};
  transition: margin-left 0.3s ease-in-out;
`;

const Header = styled.div`
  margin-bottom: 2rem;

  h1 {
    color: #2E7D32;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    background: #E8F5E9;
    color: #2E7D32;
    padding: 0.75rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.5rem;
    }
  }

  .content {
    h3 {
      color: #666;
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
    }

    .value {
      color: #2E7D32;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .trend {
      color: #4CAF50;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;

      svg {
        font-size: 1rem;
      }
    }
  }
`;

const WidgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
`;

const Widget = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  h2 {
    color: #2E7D32;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .content {
    color: #333;
  }

  ul {
    list-style: none;
  }

  li {
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }

    .label {
      color: #666;
    }

    .value {
      color: #2E7D32;
      font-weight: 500;
    }
  }
`;

interface DashboardProps {
  sidebarVisible: boolean;
}

const Dashboard = ({ sidebarVisible }: DashboardProps) => {
  return (
    <DashboardContainer sidebarVisible={sidebarVisible}>
      <Header>
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your projects today.</p>
      </Header>

      <StatsGrid>
        <StatCard>
          <div className="icon">
            <MdTrendingUp />
          </div>
          <div className="content">
            <h3>Total Revenue</h3>
            <div className="value">$48,574</div>
            <div className="trend">
              <MdTrendingUp /> +12.5%
            </div>
          </div>
        </StatCard>

        <StatCard>
          <div className="icon">
            <MdPeople />
          </div>
          <div className="content">
            <h3>Active Users</h3>
            <div className="value">2,847</div>
            <div className="trend">
              <MdTrendingUp /> +8.1%
            </div>
          </div>
        </StatCard>

        <StatCard>
          <div className="icon">
            <MdAssignment />
          </div>
          <div className="content">
            <h3>Total Projects</h3>
            <div className="value">156</div>
            <div className="trend">
              <MdTrendingUp /> +5.3%
            </div>
          </div>
        </StatCard>

        <StatCard>
          <div className="icon">
            <MdTimeline />
          </div>
          <div className="content">
            <h3>Completion Rate</h3>
            <div className="value">94.2%</div>
            <div className="trend">
              <MdTrendingUp /> +2.4%
            </div>
          </div>
        </StatCard>
      </StatsGrid>

      <WidgetGrid>
        <Widget>
          <h2>Recent Projects</h2>
          <ul>
            <li>
              <span className="label">Analytics Dashboard</span>
              <span className="value">In Progress</span>
            </li>
            <li>
              <span className="label">Customer Portal</span>
              <span className="value">Completed</span>
            </li>
            <li>
              <span className="label">Resource Planning</span>
              <span className="value">In Review</span>
            </li>
            <li>
              <span className="label">Mobile App</span>
              <span className="value">In Progress</span>
            </li>
          </ul>
        </Widget>

        <Widget>
          <h2>Team Performance</h2>
          <ul>
            <li>
              <span className="label">Tasks Completed</span>
              <span className="value">245/267</span>
            </li>
            <li>
              <span className="label">Hours Logged</span>
              <span className="value">1,856</span>
            </li>
            <li>
              <span className="label">Milestones Hit</span>
              <span className="value">12/15</span>
            </li>
            <li>
              <span className="label">Efficiency Rate</span>
              <span className="value">91.8%</span>
            </li>
          </ul>
        </Widget>
      </WidgetGrid>
    </DashboardContainer>
  );
};

export default Dashboard; 
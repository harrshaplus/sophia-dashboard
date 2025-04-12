import styled from 'styled-components';
import { useParams } from 'react-router-dom';

interface ContainerProps {
  sidebarVisible: boolean;
}

const ProjectContainer = styled.div<ContainerProps>`
  flex-grow: 1;
  padding: 2rem;
  margin-left: ${({ sidebarVisible }) => sidebarVisible ? '250px' : '0'};
  transition: margin-left 0.3s ease-in-out;
`;

const ProjectContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  h1 {
    color: #2E7D32;
    margin-bottom: 1.5rem;
  }

  p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

interface ProjectsProps {
  sidebarVisible: boolean;
}

const projectData = {
  analytics: {
    title: "Analytics Dashboard",
    description: "Welcome to the Analytics Dashboard. Here you can track your key performance indicators and metrics in real-time. Monitor user engagement, conversion rates, and other critical data points to make informed decisions.",
  },
  management: {
    title: "Project Management",
    description: "Welcome to Project Management. Streamline your workflow with our comprehensive project management tools. Assign tasks, track progress, and collaborate with team members efficiently.",
  },
  insights: {
    title: "Customer Insights",
    description: "Welcome to Customer Insights. Gain valuable insights into your customer behavior and preferences. Analyze patterns and trends to improve your service delivery and customer satisfaction.",
  },
  planning: {
    title: "Resource Planning",
    description: "Welcome to Resource Planning. Optimize your resource allocation and planning with our advanced tools. Ensure efficient utilization of assets and personnel across your organization.",
  }
};

const Projects = ({ sidebarVisible }: ProjectsProps) => {
  const { projectId } = useParams();
  const project = projectId ? projectData[projectId as keyof typeof projectData] : null;

  if (!project) {
    return (
      <ProjectContainer sidebarVisible={sidebarVisible}>
        <ProjectContent>
          <h1>Project Not Found</h1>
          <p>The requested project could not be found.</p>
        </ProjectContent>
      </ProjectContainer>
    );
  }

  return (
    <ProjectContainer sidebarVisible={sidebarVisible}>
      <ProjectContent>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Projects; 
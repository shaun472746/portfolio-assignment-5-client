import '../../../../assets/root.css';
import ProjectPage from '@/components/dashboardProjectManagement';

async function getData() {
    const res = await fetch('http://localhost:5000/api/project', {
        cache: 'force-cache',
    });
    return res.json();
}

export default async function ProjectManagement() {
    const projectData = await getData();

    return (
        <div>
            <ProjectPage projectData={projectData.data} />
        </div>
    );
}

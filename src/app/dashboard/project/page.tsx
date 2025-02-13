import '../../../../assets/root.css';
import ProjectPage from '@/components/dashboardProjectManagement';
import config from "@/config";

async function getData() {
    const res = await fetch(`${config.api_url}/project`, {
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

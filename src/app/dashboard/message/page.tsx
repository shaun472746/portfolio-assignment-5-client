import MessagePage from '@/components/dashboardMessageManagement';
import '../../../../assets/root.css';
import config from "@/config"

async function getData() {
    const res = await fetch(`${config.api_url}/message`, {
        cache: 'force-cache',
    });
    return res.json();
}

export default async function MessageManagement() {
    const messageData = await getData();
    return (
        <div>
            <MessagePage messageData={messageData.data} />
        </div>
    );
}

import MessagePage from '@/components/dashboardMessageManagement';
import '../../../../assets/root.css';
import config from "@/config"
import { Metadata } from 'next';

async function getData() {
    const res = await fetch(`${config.api_url}/message`, {
        cache: 'force-cache',
    });
    return res.json();
}

export const metadata: Metadata = {
    title: 'Dashboard-Message',
    description: 'Overview',
};


export default async function MessageManagement() {
    const messageData = await getData();
    return (
        <div>
            <MessagePage messageData={messageData.data} />
        </div>
    );
}

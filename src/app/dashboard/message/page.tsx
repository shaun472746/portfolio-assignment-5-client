import MessagePage from '@/components/dashboardMessageManagement';
import '../../../../assets/root.css';

import { Metadata } from 'next';

export const maxDuration = 35;
async function getData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
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

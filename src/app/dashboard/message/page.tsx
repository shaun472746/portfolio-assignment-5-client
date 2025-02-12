import MessagePage from '@/components/dashboardMessageManagement';
import '../../../../assets/root.css';

async function getData() {
    const res = await fetch('http://localhost:5000/api/message', {
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

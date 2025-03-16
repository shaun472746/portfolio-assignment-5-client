import { Metadata } from 'next';
import '../../../assets/root.css';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Overview',
};

export default function Project() {
    return (
        <div>
            <h1>Dashboard Content</h1>
        </div>
    );
}

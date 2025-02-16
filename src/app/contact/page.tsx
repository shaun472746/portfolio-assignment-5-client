import { Metadata } from 'next';

import ContactPage from '@/components/contact/contactPage';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Overview',
};

export default function Contact() {
    return <ContactPage />;
}

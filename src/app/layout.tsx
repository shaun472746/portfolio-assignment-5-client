import '../../assets/root.css';
import NavBar from '@/components/navigationBar';
import Providers from '@/redux/providerComponent';
// import { getServerSession, Session } from 'next-auth';
// import { authOptions } from '@/utils/authOptions';
import { Suspense } from 'react';
import Loading from './loading';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const session: Session | null = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body>
                <Providers>
                    <Suspense fallback={<Loading />}>
                        <div className="default-margin-body">
                            <NavBar />
                        </div>

                        {children}
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}

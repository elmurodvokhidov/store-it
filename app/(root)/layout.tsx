import Header from '@/components/Header'
import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    if (!currentUser) return redirect('/sign-in');

    return (
        <main className='h-screen flex'>
            <Sidebar {...currentUser} />

            <section className='h-full flex flex-1 flex-col'>
                <MobileNav />
                <Header />

                <div className='main-content'>
                    {children}
                </div>
            </section>
        </main>
    )
}
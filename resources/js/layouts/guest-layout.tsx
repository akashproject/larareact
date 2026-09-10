import { Head, Link, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';
import Logo from '@/components/ui/logo';
import { dashboard, login, register, website, page } from '@/routes';

interface GuestLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
}

export default function GuestLayout({
    children,
    title,
    description,
}: GuestLayoutProps) {
    const pageProps = usePage();
    const currentUrl = pageProps.url;
    const { auth, name } = pageProps.props as {
        auth?: { user?: Record<string, unknown> };
        name?: string;
    };

    const appName = name || 'Learnersmall';

    const navItems = [
        { label: 'Home', route: website(), path: '/' },
        { label: 'About Us', route: page({ slug: 'about-us' }), path: '/about-us' },
        { label: 'Contact Us', route: page({ slug: 'contact-us' }), path: '/contact-us' },
    ];

    const isActive = (itemPath: string) => {
        if (itemPath === '/') {
            return currentUrl === '/' || currentUrl === '';
        }
        return currentUrl.includes(itemPath);
    };

    return (
        <>
            {title && <Head title={title} />}
            <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
                {/* Header with Container Layout */}
                <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                        <div className="flex items-center gap-8">
                            <Link href={website()} className="flex items-center gap-2">
                                <Logo className="h-9 w-auto" alt={appName} />
                            </Link>

                            {/* Main Navigation Menu */}
                            <nav className="hidden md:flex items-center gap-6">
                                {navItems.map((item) => {
                                    const active = isActive(item.path);
                                    return (
                                        <Link
                                            key={item.label}
                                            href={item.route}
                                            className={`text-sm font-medium transition-colors hover:text-foreground ${
                                                active
                                                    ? 'text-primary font-semibold border-b-2 border-primary py-4'
                                                    : 'text-muted-foreground'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Right Header Navigation */}
                        <nav className="flex items-center gap-3">
                            {auth?.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Page Heading if title provided */}
                {(title || description) && (
                    <div className="border-b border-border/40 bg-muted/30 py-6">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {title && (
                                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                                    {title}
                                </h1>
                            )}
                            {description && (
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Main Content Area in Responsive Container */}
                <main className="flex-1 py-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>

                {/* Footer with Container Layout */}
                <footer className="border-t border-border/40 bg-muted/20 py-8">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Logo className="h-6 w-auto opacity-80" alt={appName} />
                            <span>&copy; {new Date().getFullYear()} {appName}. All rights reserved.</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href={website()} className="hover:underline">Home</Link>
                            <Link href={page({ slug: 'about-us' })} className="hover:underline">About Us</Link>
                            <Link href={page({ slug: 'contact-us' })} className="hover:underline">Contact Us</Link>
                            <Link href={login()} className="hover:underline">Log in</Link>
                            <Link href={register()} className="hover:underline">Register</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

export { GuestLayout };

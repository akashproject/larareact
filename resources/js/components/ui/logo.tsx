import { usePage } from '@inertiajs/react';
import type { ImgHTMLAttributes } from 'react';

export interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string;
    alt?: string;
}

export default function Logo({
    src = '/public/logo.gif',
    alt = 'Logo',
    className = 'h-8 w-auto',
    ...props
}: LogoProps) {
    const { appUrl } = usePage().props as { appUrl?: string };

    const getFullUrl = (path: string) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
            return path;
        }

        const baseUrl = appUrl || (typeof window !== 'undefined' ? window.location.origin : '');
        const cleanBase = baseUrl.replace(/\/$/, '');
        const cleanPath = path.replace(/^\//, '');

        return cleanBase ? `${cleanBase}/${cleanPath}` : path;
    };

    return (
        <img
            src={getFullUrl(src)}
            alt={alt}
            className={className}
            {...props}
        />
    );
}

export { Logo };

import Logo from '@/components/ui/logo';
import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return <Logo className="size-5 object-contain" {...props} />;
}

import GuestLayout from '@/layouts/guest-layout';
import InnerBanner from '@/components/inner-banner';


export default function DefaultPage({ contentMain }: any) {
    return (
        <div className="flex flex-col gap-10 py-4">
            <InnerBanner contentMain={contentMain} />
        </div>
    );
}


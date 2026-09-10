import GuestLayout from '@/layouts/guest-layout';
import CourseCard from '@/components/course-card';
import BannerSlider from '@/components/banner';

export default function Index() {
    return (
        <GuestLayout title="" description="">
            <div className="flex flex-col gap-10 py-4">
                <BannerSlider />
                <div className="flex justify-center">
                    <CourseCard />
                </div>
            </div>
        </GuestLayout>
    );
}
import { useCallback } from 'react';
import { usePage } from '@inertiajs/react';
import { CheckCircle2, ArrowRight, Sparkles, Award } from 'lucide-react';

export interface ContentMainData {
    id?: number | string;
    name?: string;
    title?: string;
    slug?: string;
    banner_image?: string;
    description?: string;
    excerpt?: string;
    template?: string;
    points?: string[] | string;
    [key: string]: any;
}

export interface InnerBannerProps {
    contentMain?: ContentMainData;
    badge?: string;
    heading?: string;
    subheading?: string;
    points?: string[];
    image?: string;
    imageAlt?: string;
    ctaText?: string;
    ctaHref?: string;
    statsBadgeText?: string;
}

const DEFAULT_POINTS: string[] = [
    '100% Practical & Job-Ready Modules',
    'Industry-Expert Mentorship & Guidance',
    'Live Client Projects & Real Case Studies',
    'Dedicated Placement Support & Interview Prep',
    'Flexible Weekend & Weekday Batches',
    'Globally Recognized Course Certification',
    'Free Masterclasses & 1-on-1 Doubt Sessions',
    'Lifetime Access to Study Materials & LMS',
];

export default function InnerBanner({
    contentMain,
    badge,
    heading,
    subheading,
    points,
    image,
    imageAlt,
    ctaText = 'Apply Now',
    ctaHref = '#',
    statsBadgeText = '100% Job Guarantee',
}: InnerBannerProps) {
    const { appUrl } = usePage().props as { appUrl?: string };

    const getFullUrl = useCallback(
        (path: string) => {
            if (!path) return '';
            if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
                return path;
            }

            const baseUrl = appUrl || (typeof window !== 'undefined' ? window.location.origin : '');
            const cleanBase = baseUrl.replace(/\/$/, '');
            const cleanPath = path.replace(/^\//, '');

            return cleanBase ? `${cleanBase}/${cleanPath}` : path;
        },
        [appUrl]
    );

    // Resolve props with priority: explicit prop > contentMain property > default value
    const resolvedBadge = badge || contentMain?.name || 'Career Advancement Program';
    const resolvedHeading = heading || contentMain?.title || contentMain?.name || 'Level Up Your Career with Advanced Skill Training';
    const resolvedSubheading = subheading || contentMain?.description || contentMain?.excerpt || "Enroll in an industry-developed course with practical hands-on training, real-world case studies, and dedicated career placement support.";
    const resolvedImage = image || contentMain?.banner_image || '/advanced-accounts-course-online.webp';
    const resolvedImageAlt = imageAlt || contentMain?.name || contentMain?.title || 'Inner Banner Feature Image';

    // Parse and resolve 8 points
    let resolvedPoints: string[] = DEFAULT_POINTS;
    if (points && points.length > 0) {
        resolvedPoints = points;
    } else if (contentMain?.points) {
        if (Array.isArray(contentMain.points)) {
            resolvedPoints = contentMain.points;
        } else if (typeof contentMain.points === 'string') {
            try {
                const parsed = JSON.parse(contentMain.points);
                if (Array.isArray(parsed)) resolvedPoints = parsed;
            } catch {
                resolvedPoints = contentMain.points.split(',').map((p) => p.trim());
            }
        }
    }

    const displayPoints = resolvedPoints.slice(0, 8);

    return (
        <section aria-label="Inner Banner" className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white border border-slate-800 shadow-2xl">
            {/* Ambient Lighting & Glow Effects */}
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-64 w-64 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

                    {/* Left Side Content: Heading, Subheading, 8 Points */}
                    <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
                        {resolvedBadge && (
                            <div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-inset ring-blue-500/30 backdrop-blur-sm">
                                    <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                                    {resolvedBadge}
                                </span>
                            </div>
                        )}

                        <div className="space-y-2.5">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight">
                                {contentMain?.name}
                            </h1>
                            {resolvedSubheading && (
                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl">
                                    {contentMain?.description}
                                </p>
                            )}
                        </div>

                        {/* 8 Points Grid */}
                        <div className="pt-2">
                            <h2 className="sr-only">Key Course Highlights</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {displayPoints.map((point, index) => (
                                    <li key={index} className="flex items-start gap-2.5 group">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 ring-1 ring-blue-400/30 transition-transform duration-200 group-hover:scale-110 mt-0.5">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                                        </div>
                                        <span className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
                                            {point}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Call to Action Button */}
                        {ctaText && (
                            <div className="pt-3 flex flex-wrap items-center gap-4">
                                <a
                                    href={ctaHref}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:from-blue-500 hover:to-indigo-500 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                                >
                                    <span>{ctaText}</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right Side Image */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="relative w-full max-w-md lg:max-w-none group">
                            {/* Glassmorphic Background Card Glow */}
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-lg transition duration-500 group-hover:opacity-60" />

                            <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 bg-slate-900/80 shadow-2xl aspect-[4/3]">
                                <img
                                    src={getFullUrl(resolvedImage)}
                                    alt={resolvedImageAlt}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Overlay subtle gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* Floating Stats / Trust Badge */}
                            {statsBadgeText && (
                                <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 flex items-center gap-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 px-4 py-2.5 shadow-xl backdrop-blur-md">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                                        <Award className="h-4 w-4" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Trust Factor</p>
                                        <p className="text-xs font-bold text-white">{statsBadgeText}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}


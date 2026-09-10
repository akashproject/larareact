import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePage } from '@inertiajs/react';

export interface BannerSlide {
    id: number | string;
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    ctaText?: string;
    ctaHref?: string;
}

const DEFAULT_SLIDES: BannerSlide[] = [
    {
        id: 1,
        badge: 'Featured Course',
        title: 'Master Advanced Accounts Online',
        subtitle: 'Elevate your accounting skills',
        description: 'Comprehensive practical training covering financial statements, tax planning, GST compliance, and corporate accounting modules.',
        image: '/larareact/public/advanced-accounts-course-online.webp',
        ctaText: 'Explore Course',
        ctaHref: '#',
    },
    {
        id: 2,
        badge: 'Popular Choice',
        title: 'Interactive Learning at Learnersmall',
        subtitle: 'Learn at your own pace',
        description: 'Join thousands of professionals upgrading their careers with expert-led structured courses and live case studies.',
        image: '/larareact/public/advanced-accounts-course-online.webp',
        ctaText: 'View All Courses',
        ctaHref: '#',
    },
    {
        id: 3,
        badge: 'New Batch Opening',
        title: 'Certified Financial & Tax Analyst',
        subtitle: 'Get Industry Ready',
        description: 'Hands-on practical modules, real-world project assignments, and recognized certification upon completion.',
        image: '/larareact/public/advanced-accounts-course-online.webp',
        ctaText: 'Enroll Now',
        ctaHref: '#',
    },
];

interface BannerSliderProps {
    slides?: BannerSlide[];
    autoPlayInterval?: number;
}

export default function BannerSlider({
    slides = DEFAULT_SLIDES,
    autoPlayInterval = 5000,
}: BannerSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { appUrl } = usePage().props as { appUrl?: string };

    const getFullUrl = useCallback((path: string) => {
        if (!path) return '';
        if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
            return path;
        }

        const baseUrl = appUrl || (typeof window !== 'undefined' ? window.location.origin : '');
        const cleanBase = baseUrl.replace(/\/$/, '');
        const cleanPath = path.replace(/^\//, '');

        return cleanBase ? `${cleanBase}/${cleanPath}` : path;
    }, [appUrl]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        if (isPaused || slides.length <= 1) return;

        const timer = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [isPaused, autoPlayInterval, slides.length, handleNext]);

    if (!slides || slides.length === 0) return null;

    const currentSlide = slides[currentIndex];

    return (
        <section
            aria-label="Banner Slider"
            className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl min-h-[420px] lg:min-h-[460px] flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Gradient Accents */}
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 py-8 lg:px-12 lg:py-12">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

                    {/* Left Side: 60% Width */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-center space-y-4 text-left transition-all duration-500">
                        {currentSlide.badge && (
                            <div>
                                <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-semibold text-blue-300 ring-1 ring-inset ring-blue-500/30">
                                    {currentSlide.badge}
                                </span>
                            </div>
                        )}

                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                                {currentSlide.title}
                            </h2>
                            {currentSlide.subtitle && (
                                <p className="text-lg font-medium text-blue-200/90">
                                    {currentSlide.subtitle}
                                </p>
                            )}
                        </div>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl line-clamp-3">
                            {currentSlide.description}
                        </p>

                        {currentSlide.ctaText && (
                            <div className="pt-2">
                                <a
                                    href={currentSlide.ctaHref || '#'}
                                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                                >
                                    {currentSlide.ctaText}
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right Side: 40% Width */}
                    <div className="w-full lg:w-[40%] flex justify-center items-center">
                        <div className="relative w-full max-w-sm lg:max-w-none aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/60">
                            <img
                                src={getFullUrl(currentSlide.image)}
                                alt={currentSlide.title}
                                className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Slider Navigation Buttons */}
            {slides.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-white/80 hover:bg-slate-900 hover:text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next Slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/60 p-2 text-white/80 hover:bg-slate-900 hover:text-white backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                        ? 'w-6 bg-blue-400'
                                        : 'w-2 bg-slate-600 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

export { BannerSlider };

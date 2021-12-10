import React from "react";
import { ArrowDownIcon } from '@heroicons/react/outline'
export default function HeroSection() {
    return (
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden h-screen relative">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                <span className="block">Finde optimale Pfade</span>
                                <span className="block text-indigo-400">mit dem Ameisenalgorithmus</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                In der Informatik ist der Ameisenalgorithmus (Ant colony optimization) ein probabilistischer Ansatz, um optimale Pfade in einem Graphen zu finden.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                            <img
                                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="/ant_on_hill.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* More main page content here... */}
            <a href="#inspired"
                type="button"
                className="animate-bounce absolute left-1/2 -ml-6 bottom-12 lg:bottom-2  sm:hidden lg:block items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <ArrowDownIcon className="h-6 w-6" aria-hidden="true" />
            </a>
        </div>
    )
}
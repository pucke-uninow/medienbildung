import React from "react";

export default function RealLifeIdol() {
    return (
        <div className="relative bg-white py-16 sm:py-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative sm:py-16 lg:py-0">
                    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative pt-64 mt-8 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img src="/graphExample.png" alt="Graph Example" className="absolute inset-0 h-full w-full object-scale-down" />
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                            Inspiriert von der Natur
                        </h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="text-lg">
                                Die Idee des Algorithmus ist, das Verhalten der biologischen Vorbilder zu simulieren.
                            </p>
                            <p className="text-base leading-7">
                                Ameisen bewegen sich scheinbar zufällig, jedoch Folgen sie einem einfachen System.
                                Während sie sich bewegen hinterlassen Ameisen eine Pheromonspur und wählen als nächsten Pfad,
                                 den Pfad mit der höchsten Pheromonkonzentration oder einen zufälligen.
                            </p>
                            <p className="text-base leading-7">
                                Dieses einfache Prinzip reicht aus um in Graphen beliebiger Komplexität den kürzesten Pfad zwischen zwei Knoten zu finden.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

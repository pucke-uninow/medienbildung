import React from "react";

export default function HowItWorks() {
    return (
        <div className="relative bg-white sm:py-8" id="howitworks">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0  md:-mt-8">
                    {/* Content area */}
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                            Wie funktioniert das Ganze?
                        </h2>
                        <div className="mt-6 text-gray-500 space-y-6">
                            <p className="text-lg">
                                Die Kommunikation zwischen den Ameisen findet durch Pheromone statt.
                            </p>
                            <p className="text-base leading-7">
                                Bewegt sich eine Ameise, hinterlässt sie eine Pheromonspur.
                                Die Pheromonspur hilft den Ameisen bei der Entscheidung, welchem Pfad sie als nächstes folgen.
                                Pfade mit einer Pheromonspur werden mit einer viel größeren Wahrscheinlichkeit
                                ausgewählt als Pfade ohne Pheromonspur.
                                Die Pheromonkonzentration lässt mit der Zeit nach. Dieser Vorgang heißt Evaporation.
                            </p>
                            <p className="text-base leading-7">
                                Am Anfang sind alle Pfade Pheromon frei. Dadurch entscheiden sich die Ameisen für einen zufälligen Pfad.
                                Dabei hinterlassen sie eine Pheromonspur.
                                Die Ameise auf dem kürzeren Pfad erreicht die Futterquelle zuerst,
                                sammelt Nahrung und steht nun vor der Entscheidung, welchem Pfad sie als nächstes folgen soll.
                                Der eine (längere) Pfad besitzt noch keine Pheromonspur. Der andere (kürzere) Pfad besitzt eine Pheromonspur (ihre eigene).
                                Also wird die Ameise den Pfad mit Pheromonspur auswählen und den gleichen Weg zurückgehen.
                                Dabei hinterlässt sie abermals eine Pheromonspur und erhöht die Konzentration auf dem kürzeren Pfad.
                            </p>
                            <p className="text-base leading-7">
                                Die Ameise auf dem längeren Pfad erreicht nun auch endlich die Futterquelle.
                                Auch sie sammelt Futter und muss sich nun für den nächsten Pfad entscheiden.
                                Dabei findet sie einen Pfad mit einfacher Pheromonkonzentration (ihr Hinweg) und
                                einen Pfad mit doppelter Pheromonkonzentration (kürzere Pfad) vor.
                                Sie entscheidet sich für den kürzeren Pfad und folgt diesem bis zum Nest. Die Pheromonkonzentration
                                dieses Pfades steigt dadurch weiter. Der kürzere Pfad dominiert den Längeren und wird dadurch bevorzugt.
                                Alle Ameisen folgen nun dem kürzesten Pfad.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative sm:py-16 py-12">
                    <div className="relative mx-auto max-w-md px-4 md:mt-24 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        {/* Testimonial card*/}
                        <div className="relative bg-white pt-64 mt-8 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img src="/algorithmAnimated.gif" alt="Graph Example" className="absolute inset-0 h-full w-full object-fit"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

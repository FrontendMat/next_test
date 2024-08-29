"use client";

import { memo, useEffect, useState } from "react";
import { Car } from "@/types/types";
import { CarCard } from "@/components/CarCard/CarCard";

interface ModelListBlockProps {
    makeId?: string;
    year?: string;
}

export const ModelListBlock = memo((props: ModelListBlockProps) => {
    const { makeId, year } = props;
    const [error, setError] = useState<string | null>(null);
    const [models, setModels] = useState<Car[]>([]);

    useEffect(() => {
        if (makeId && year) {
            fetch(
                `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error"); // EXAMPLE
                    }
                    return response.json();
                })
                .then((data) => setModels(data.Results))
                .catch((error) => setError(String(error)));
        }
    }, [makeId, year]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-6">
                <h1>{error}</h1>
                <p>Please, reload the Page</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-6">Models for {year}</h1>
            <div className="flex flex-wrap gap-2 justify-center">
                {models.length > 0 ? (
                    models.map((model) => (
                        <CarCard data={model} key={model.Model_ID} />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
});

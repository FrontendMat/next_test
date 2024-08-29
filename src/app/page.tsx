"use client";

import { useState, useEffect } from "react";
import { SelectBlock } from "@/components/SelectBlock/SelectBlock";

export default function Home() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
        )
            .then((response) => response.json())
            .then((data) => setTypes(data.Results));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-6 max-md:p-4 border-2 border-blue-500 rounded-2xl w-fit m-auto">
            <SelectBlock types={types} />
        </div>
    );
}

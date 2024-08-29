"use client";

import { memo, useCallback, useState } from "react";
import { MySelect } from "@/components/MySelect/MySelect";
import { getYearArr } from "@/lib/getYearArr";
import { Car } from "@/types/types";
import Link from "next/link";

interface SelectBlockProps {
    types?: Car[];
}

export const SelectBlock = memo((props: SelectBlockProps) => {
    const { types } = props;
    const [selectedType, setSelectedType] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const yearArray = getYearArr(2015);

    const onYearSelect = useCallback((value: string) => {
        setSelectedYear(value);
    }, []);

    const onTypeSelect = useCallback((value: string) => {
        setSelectedType(value);
    }, []);

    const typesOptions = types?.map((vehicle) => (
        <option
            className={"text-sm"}
            key={vehicle.MakeId}
            value={vehicle.MakeId}
        >
            {vehicle.MakeName}
        </option>
    ));

    const yearsOptions = yearArray?.map((year) => (
        <option className={"text-sm"} key={year} value={year}>
            {year}
        </option>
    ));

    return (
        <div className={"max-w-2xl w-full"}>
            <h1 className="text-4xl font-bold mb-6">Please, select data</h1>
            <MySelect
                value={selectedType}
                defaultValue={"Select Type"}
                label={"Select Type"}
                onChange={onTypeSelect}
                options={typesOptions}
            />
            <MySelect
                value={selectedYear}
                defaultValue={"Select Value"}
                label={"Select Year"}
                onChange={onYearSelect}
                options={yearsOptions}
            />
            <Link href={`/result/${selectedType}/${selectedYear}`}>
                <button
                    disabled={!selectedYear && !selectedYear}
                    className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400"
                >
                    Next
                </button>
            </Link>
        </div>
    );
});

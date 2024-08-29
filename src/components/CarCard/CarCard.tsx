import { memo } from "react";
import { Car } from "@/types/types";

interface CarCardProps {
    data?: Car;
}

export const CarCard = memo((props: CarCardProps) => {
    const { data } = props;

    return (
        <div
            className={
                "w-[320px] bg-slate-200 p-6 rounded-xl flex flex-col gap-4"
            }
        >
            <h1 className={"font-bold"}>{data?.Model_Name}</h1>
            <p>{data?.Model_ID}</p>
        </div>
    );
});

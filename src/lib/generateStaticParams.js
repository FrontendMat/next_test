import { getYearArr } from "@/lib/getYearArr";

export async function generateStaticParams() {
    const res = await fetch(
        "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json",
    );
    const data = await res.json();

    const makes = data.Results.map((make) => make.Make_ID);
    const years = getYearArr(2015);

    const paths = makes.flatMap((makeId) =>
        years.map((year) => ({
            params: { makeId, year: year.toString() },
        })),
    );

    return paths;
}

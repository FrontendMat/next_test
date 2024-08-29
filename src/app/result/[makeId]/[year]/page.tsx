import { ModelListBlock } from "@/components/ModelListBlock/ModelListBlock";
import { generateStaticParams } from "@/lib/generateStaticParams";

export { generateStaticParams };

export default function ResultPage({ params }: any) {
    const { makeId, year } = params;
    return <ModelListBlock makeId={makeId} year={year} />;
}

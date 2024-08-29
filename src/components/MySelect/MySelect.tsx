import { ChangeEvent, memo, ReactNode } from "react";

interface MySelectProps {
    label?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (val: string) => void;
    options?: ReactNode[];
}

export const MySelect = memo((props: MySelectProps) => {
    const { label, onChange, options, defaultValue, value } = props;

    const isDisabled = value !== "";

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={"flex gap-2 items-center mb-4 max-md:flex-col"}>
            {label && <span className={"font-bold"}>{`${label}>`}</span>}
            <select
                className={
                    "p-2 text-sm border border-gray-300 rounded w-[360px] max-md:w-full"
                }
                value={value ?? defaultValue}
                onChange={onChangeHandler}
            >
                <option disabled={isDisabled}>Select Option</option>
                {options}
            </select>
        </div>
    );
});

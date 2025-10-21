interface StartingComponentProps {
    text: string;
    className: string;
}

export default function StartingComponent({ text, className }: StartingComponentProps) {
    return (
        <div className={`${className} min-w-[120px] max-w-[120px] absolute border-b h-max pb-[2px] border-white border-opacity-50 border-solid`}>
            <span className="font-poppins text-xs text-[#FFFFFF80] whitespace-nowrap">{text}</span>
        </div>
    )
}
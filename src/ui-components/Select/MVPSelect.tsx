export type TOption = {
    label: string;
    value:string;
}

export interface ISelectProps {
    options: TOption[];
    onChange(option:TOption):void;
    selected:TOption;
}

export const MVPSelect:React.FC<ISelectProps> = (props) => {
    return (
        <select>
            {props.options.map((item) => (<option value={item.value}>{item.label}</option>))}
        </select>
    )
}

interface IInput {
    value:number;
    onChange: (newValue:number) => void;
}

export const Input:React.FC<IInput> = ({value, onChange}) => (
    <input
        type="number"
        value={value}
        data-testid="input-number"
        onChange={(e) => onChange(parseInt(e.target.value))}
    />
)

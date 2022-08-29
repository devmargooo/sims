interface ICheckbox {
    checked:boolean;
    onChange: () => void;
}

// Checkbox.tsx

export const Checkbox:React.FC<ICheckbox> = ({checked, onChange}) => (
    <input
        type="checkbox"
        checked={checked}
        data-testid="input-checkbox"
        onChange={onChange}
    />
)

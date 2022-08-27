import {render, screen} from '@testing-library/react'
import {Button} from "./Button";

it('should displays greeting', () => {
    const text = "Кнопка"
    const onClick = jest.fn();
    render(<Button text={text} onClick={onClick}/>);

    expect(screen.getByTestId('paragraph'))
        .toHaveTextContent("Hello!");
})

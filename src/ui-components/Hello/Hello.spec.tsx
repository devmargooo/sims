import {render, screen} from '@testing-library/react'
import {Hello} from "./Hello";

it('should displays greeting', () => {
    render(<Hello/>);

    expect(screen.getByTestId('paragraph'))
        .toHaveTextContent("Hello!");
})

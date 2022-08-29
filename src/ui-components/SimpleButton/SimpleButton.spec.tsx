import {fireEvent, render, screen} from '@testing-library/react'
import {SimpleButton} from "./SimpleButton";
import userEvent from '@testing-library/user-event'
// SimpleButton.spec.tsx
import styles from "./styles.module.css";

describe("Button", () => {
    it("has correct style", () => {
        render(<SimpleButton text="Кнопка" onClick={() => void 0}/>);
        expect(screen.getByRole('button')).toHaveStyle({color: 'blue'})
    })
    it('should display correct text', () => {
        const text = "Кнопка"
        render(
            <SimpleButton text={text} onClick={() => void 0}/>
        );

        expect(screen.getByRole('button')).toHaveTextContent(text);
    })
    it('should call onClick when click', () => {
        const onClick = jest.fn();
        render(<SimpleButton text="" onClick={onClick}/>);
        userEvent.click(screen.getByRole('button'));
        expect(onClick).not.toHaveBeenCalledTimes(1);
    })
    it('test fireEvent', () => {
        const onClick = jest.fn();
        render(<SimpleButton text="" onClick={onClick}/>);
        fireEvent(
            screen.getByRole('button'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            }),
        )
        expect(onClick).not.toHaveBeenCalledTimes(1);
    })
    it('test fireEvent 2', () => {
        const onClick = jest.fn();
        render(<SimpleButton text="" onClick={onClick}/>);
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).not.toHaveBeenCalledTimes(1);
    })
})

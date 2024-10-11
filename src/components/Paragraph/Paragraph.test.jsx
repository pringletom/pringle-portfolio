import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Paragraph from './Paragraph'

test("Paragraph", () => {
    render(<Paragraph/>)
    expect(screen.getByTestId('paragraphElement')).toBeInTheDocument();
})

test("renders text content", () => {
    render(<Paragraph textContent={"a little from column A, a little from column B"}/>)
    expect(screen.getByTestId('paragraphElement')).toHaveTextContent("a little from column A, a little from column B");

}
)


test("renders text content", () => {
    render(<Paragraph textContent={""}/>)
    expect(screen.getByTestId('paragraphElement')).not.toHaveTextContent("For the last four months I have been learning full stack webdev.");

}
)


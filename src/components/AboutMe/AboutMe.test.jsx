// test forcontainer
// test for paragraph element inside container
// test for text within paragraph
// esch test will fail. make it pass
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import AboutMe from './AboutMe.jsx'


test("AboutMeContainer", () => {
    render(<AboutMe/>)
    expect(screen.getByTestId('container')).toBeInTheDocument();
})

test("renders Paragraph text", () => {
    render(<AboutMe/>)
    expect(screen.getByTestId('paragraphElement')).toBeInTheDocument()

})



test('renders text in Paragraph element', () => {
    render(<AboutMe />)
    // pass mock data to paragraph element -0-- React Testing ~Library Mock google it. Thanks Tom.
    expect(screen.getByTestId('paragraphElement')).toHaveTextContent('whatever we say')
})

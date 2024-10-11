import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import HeroBanner from './HeroBanner'

test("renders banner with h1 element", () => {
    render(<HeroBanner/>)
    expect(screen.getByTestId('testElementH1')).toBeInTheDocument()
})

test("renders banner text", () => {
    render(<HeroBanner bannerTitle={"a little from column A, a little from column B"}/>)
    expect(screen.getByTestId('testElementH1')).toHaveTextContent('very well Bart. I will send you to heaven, before I send you to hell.')

})

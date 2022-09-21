import { fireEvent, render } from '@testing-library/react'
import App from './App'

describe('Counter', () => {
  it('handles increment count', () => {
    const { getByTestId, getByRole } = render(<App />)
    const incrementBtn = getByRole('button', { name: '+' })
    const countNode = getByTestId('count')

    expect(countNode).toHaveTextContent(0)
    fireEvent.click(incrementBtn)
    expect(countNode).toHaveTextContent(1)
  })

  it('handles decrement count', () => {
    const { getByTestId, getByRole } = render(<App />)
    const incrementBtn = getByRole('button', { name: '+' })
    const decrementBtn = getByRole('button', { name: '-' })
    const countNode = getByTestId('count')

    expect(countNode).toHaveTextContent(0)
    fireEvent.click(incrementBtn)
    expect(countNode).toHaveTextContent(1)
    fireEvent.click(decrementBtn)
    expect(countNode).toHaveTextContent(0)
  })
})

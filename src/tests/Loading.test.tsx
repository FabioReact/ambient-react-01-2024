import Loading from '../components/Loading'
import { render, screen } from '@testing-library/react'

describe('Loading Component', () => {
  it('should return children if loading is false', () => {
    render(
      <Loading isLoading={false}>
        <p>Success</p>
      </Loading>,
    )

    const result = screen.getByText(/success/i)
    expect(result).toBeInTheDocument()
  })

  it('should return children if loading is true', () => {
    render(
      <Loading isLoading={true}>
        <p>Success</p>
      </Loading>,
    )

    const result = screen.queryByText(/success/i)
    expect(result).toBeNull()
  })
})

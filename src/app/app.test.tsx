import { render, screen } from '@/testing/test-utils'
import App from './app'

describe('App', () => {
  it('renders the app heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Flood Response' }),
    ).toBeInTheDocument()
  })
})

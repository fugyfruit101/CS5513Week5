// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('Img is Vercel', () => {
    render(<Home />)

    const img = screen.getByRole('img', {
      img: /Vercel Logo/i,
    })

    expect(img).toBeInTheDocument()
  })
})
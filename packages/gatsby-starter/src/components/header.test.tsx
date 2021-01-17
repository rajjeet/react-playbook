import { render } from '@testing-library/react'
import { Header } from './header'
import React from 'react'

describe('header', function () {
  it('should show the site title', function () {
    const { queryByText } = render(<Header siteTitle={'test site'} />)
    expect(queryByText('test site')).not.toBeNull()
  })
})

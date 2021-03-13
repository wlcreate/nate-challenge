import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import UserHistory from './UserHistory'

describe('urls', () => {
  test('renders nothing if there is no user history', () => {
    const props = {
      urls: []
    }

    const component = render(
      <UserHistory {...props}/>
    )
  
    expect(component.container).toHaveTextContent(
      "Here are your previous urls"
    )
  })

  test('renders content if there are urls', () => {
    const props = {
      urls: ["hello", "goodbye", "world"]
    }

    const component = render(
      <UserHistory {...props} />
    )

    const listItems = component.container.querySelectorAll('li')

    expect(listItems.length).toBe(3)
  })
})
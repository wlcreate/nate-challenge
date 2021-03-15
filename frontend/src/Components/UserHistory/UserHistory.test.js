import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import UserHistory from './UserHistory'

describe('urls', () => {
  test('renders <p> that lets the user know there is no history if there is no user history', () => {
    const props = {
      history: []
    }

    const component = render(
      <UserHistory {...props}/>
    )
  
    const content = component.container.querySelector('p')

    expect(content).toHaveTextContent(
      "You don't have any urls!"
    )
  })

  test('renders <li> for each url if there is a user history', () => {
    const props = {
      history: ["hello", "goodbye", "world"]
    }

    const component = render(
      <UserHistory {...props} />
    )

    const listItems = component.container.querySelectorAll('li')

    expect(listItems.length).toBe(3)
  })
})
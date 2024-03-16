import { render } from 'react-dom'
import React from 'react'

import { SimpleView } from './SimpleView'
import { DiffView } from './DiffView'
import { Col, Container, Flex, GlobalStyle, PageHeading } from './style'

const urlParams = new URLSearchParams(window.location.search)

const paramValue = urlParams.get('query')

function removeTextBefore(inputString, searchString) {
  // Find the index of the search string
  var index = inputString.indexOf(searchString)

  // If the search string is found
  if (index !== -1) {
    // Remove all text including and before the search string
    return inputString.slice(index + searchString.length).slice(0, -1)
  }

  // Return the original string if the search string is not found
  return inputString
}

// Example usage
var originalString = paramValue
var searchString = '@jsonWatchdog'
var result = removeTextBefore(originalString, searchString)
console.log(result) // Output will be "important text."

const jsonString = result

const data = JSON.parse(jsonString)
console.log(data)

console.log(`%c $: result `, `font-size:16px;background-color:#16745f;color:white;`, data)

render(
  <Container>
    <GlobalStyle />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ fontSize: '30', fontWeight: 'bold', marginRight: '10px' }}>Watchdog</p>
      <p style={{ fontSize: '15', fontWeight: 'thin' }}>JSON</p>
    </div>
    <Flex>
      <Col>
        {/* <h3>Simple</h3> */}
        <SimpleView value={data} />
      </Col>
      {/* <Col>
        <h3>Diff view</h3>
        <DiffView />
      </Col> */}
    </Flex>
  </Container>,
  document.body.appendChild(document.createElement('div'))
)

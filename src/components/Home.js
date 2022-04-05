import React, { Component } from 'react'
import { allGiftCards } from '../giftcards/giftcards'
import { Container, Row } from 'react-bootstrap'


export class Home extends Component {
  render() {
      console.log(allGiftCards)
    return (
      <div className="bg-gray">
          <Container className="p-5">
                <h3 className="text-orange font-40">Giftcards</h3>
                <Row className="my-5">

                </Row>
          </Container>
      </div>
    )
  }
}

export default Home
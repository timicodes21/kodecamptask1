import React, { Component } from 'react'
import { allGiftCards } from '../giftcards/giftcards'
import { Container, Row } from 'react-bootstrap'


export class Home extends Component {
  render() {
      console.log(allGiftCards)
    return (
      <div>
          <Container className="p-5">
                <h3 className="text-black font-40">Giftcards</h3>
                <Row className="my-3 bg-gray">
                    {
                        allGiftCards.map(giftcard => (
                            <div key={giftcard.id} className="col-12 col-md-3 bg-white shadow-sm p-3 my-2 rounded">
                                <p className="text-orange font-32">{giftcard.title}</p>
                                <h4 className="text-black">Currencies</h4>
                                <Row> 
                                    {
                                        giftcard.currencies.map(currency => (
                                            <div className="col-3">
                                                <p className="text-blue font-16">{currency}</p>
                                            </div>
                                        ))
                                    }
                                </Row>
                            </div>
                        ))
                    }
                </Row>
          </Container>
      </div>
    )
  }
}

export default Home
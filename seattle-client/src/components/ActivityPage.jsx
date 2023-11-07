import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, ListGroup, ListGroupItem, CardLink } from 'reactstrap'

export default function ActivityPage() {
    return (
        <div className='detailContainer'>
            <Card
                className='details'
                style={{
                    width: '70vw'
                }}
            >
                <CardBody>
                    <CardTitle tag="h5">
                        name (e.g. Seahawks v. Someone at Place)
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Type here (e.g. 'sporting event')
                    </CardSubtitle>

                    <CardImg
                        alt='generic decorative image'
                        src='assets/seahawks.png'
                        width="100%"
                    />

                    <ListGroup flush>
                        <ListGroupItem>
                            Price Rating: [insert]
                        </ListGroupItem>
                        <ListGroupItem>
                            Family Friendly: [insert]
                        </ListGroupItem>
                        <ListGroupItem>
                            Address: [insert]
                        </ListGroupItem>
                    </ListGroup>

                    <CardLink href='#'>
                        Go to event site...
                    </CardLink>

                </CardBody>
            </Card>
        </div>
    )
}



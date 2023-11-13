import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function QuizResults({ filteredResults, selectedDistrict }) {

    if (filteredResults.length === 0 && selectedDistrict === '') {
        return null
    } else if (filteredResults.length === 0) {
        return <p>Sorry, it doesn't look like there's anything like that near you.</p>
    } else if (filteredResults.length > 0) {
        return (<div >
            {filteredResults.map((result) => (
                <Card className='quiz-card' key={result._id} style={{ width: '18rem' }}>
                    <CardBody>
                        <CardTitle tag="h5">{result.name}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Rating: {result.rating}/5
                        </CardSubtitle>
                        <CardText>{result.address}</CardText>
                    </CardBody>
                </Card>
            ))}
            <br/>
            <Button onClick={() => location.reload()}>Start Over</Button>
        </div>)

    }
}
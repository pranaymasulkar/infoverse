import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Testimoni1 } from "../../utils/allImgs";
import { AiFillStar } from "react-icons/ai";

const TestimoniCard = () => {
    const Testimonial = [
        {
            Title: "Adam Watson",
            Description: "lNam ut fringilla leo, sed aliquam sapien. Integer pharetra blandit enim sed egestas. Aenean sagittis eleifend justo eu, feugiat arcu.",
            Avtar: Testimoni1,
            Designation: "Barista",

        },
        {
            Title: "Lisa Smith",
            Description: "gained extended experience in ec orci sed justo blandit pharetra nec id urna. Maecenas ac velit vitae est ullamcorper tempus. Nam consectetur quis ipsum eu venenatis.",
            Avtar: Testimoni1,
            Designation: "Barista",

        },
        {
            Title: "Nick Green",
            Description: "Crypto Capital blandit magna vitae ante finibus congue id sed enim. Proin non leo accumsan sem venenatis auctor. Morbi quis turpis fringilla, suscipit elit quis, facilisis nisl. Proin non leo accumsan sem venenatis auctor. ",
            Avtar: Testimoni1,
            Designation: "Barista",

        },
    ]
  return (
    <>
        {Testimonial.map((Testimoni) => (
            <Col md={4} key={Testimoni.id}>
            <Card className="testimonicard">
                <Card.Body>
                    <p><AiFillStar className="gold-c"/><AiFillStar className="gold-c"/><AiFillStar className="gold-c"/><AiFillStar className="white"/><AiFillStar className="white"/></p>
                    <Card.Text>
                        {Testimoni.Description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{Testimoni.Title}</h5>
                            <p>{Testimoni.Designation}</p>
                        </div>
                        <Image src={Testimoni.Avtar.src} className="img-fluid" alt={Testimoni.Title}/>
                    </div>
                </Card.Body>
            </Card>
            </Col>
        ))}
    </>
  )
}

export default TestimoniCard
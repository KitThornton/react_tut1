// Let's try creating a card group to be displayed on the home pagen under the first image
import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer, MDBCardImage } from "mdbreact";
import img from './ExhallCC4.jpg';

const CardGroup = () => {
    return(
        // <MDBContainer>
            <MDBRow className="mb-1">
                <MDBCol sm="3">
                    <MDBCard className={""}>
                        <MDBCardImage className="img-fluid" src={img}
                                      waves
                                      width="380"
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Statistics</MDBCardTitle>
                            <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                            {/*<MDBBtn href="#">Click</MDBBtn>*/}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm="3">
                    <MDBCard className={""}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                      waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                            <MDBBtn href="#">Click</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol col="3">
                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                      alt="MDBCard image cap" top hover
                                      overlay="white-slight" />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm="3">
                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                      alt="MDBCard image cap" top hover
                                      overlay="white-slight" />
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </MDBCardText>
                            <MDBBtn color="primary" size="md">
                                read more
                            </MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        // </MDBContainer>
    )
}

export default CardGroup;
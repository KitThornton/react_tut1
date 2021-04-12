// Let's trying creating a carousel for the homepage
import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBCardImage, MDBCardBody, MDBCardText} from "mdbreact";
import Pills from './Pill';
import img from './ExhallCC1.png';
import CardGroup from './CardGroup';

const JumbotronPage = () => {
    return (
        <MDBContainer style={{ padding: 0 }}>
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron fluid style={{ padding: 0 }}>
                        <MDBCol className="text-white text-center py-5 px-4"
                                style={{ backgroundImage: `url(https://mdbcdn.b-cdn.net/img/Photos/Others/gradient1.jpg)` }}>
                            <MDBCol className="py-5">
                                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                    optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
                            </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

const JumbotronPage2 = () => {
    return (
        // <div style={{ padding: 0 }} className="text-center">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }} className="p-0">
                        <MDBCardImage
                            className="img-fluid"
                            src={img}
                            width={"100%"}
                        />
                        <MDBCardBody className="light">
                            <MDBRow>
                                <CardGroup />
                            </MDBRow>
                            <br/>
                        </MDBCardBody>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        // </div>
    )
}

export default JumbotronPage2;
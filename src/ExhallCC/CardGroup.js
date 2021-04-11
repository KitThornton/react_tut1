// Let's try creating a card group to be displayed on the home pagen under the first image
import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";

const CardGroup = () => {
    return(
        <MDBContainer>
            <MDBRow className="mb-4">
                <MDBCol sm="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional
                                content.
                            </MDBCardText>
                            <MDBBtn color="primary">go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm="6">
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Special title treatment</MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional
                                content.
                            </MDBCardText>
                            <MDBBtn color="primary">go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default CardGroup;
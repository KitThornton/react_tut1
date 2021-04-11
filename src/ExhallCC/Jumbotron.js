// Let's trying creating a carousel for the homepage
import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBCardImage, MDBCardBody, MDBCardText} from "mdbreact";
import Pills from './Pill';
import img from './ExhallCC1.png';
import CardGroup from './CardGroup';

const JumbotronPage = () => {
    return (
        // <MDBContainer>
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
        // </MDBContainer>
    )
}

const JumbotronPage2 = () => {
    return (
        // <MDBContainer className="text-center">
            <MDBRow>
                <MDBCol>
                    <MDBJumbotron className="p-0">
                        <MDBCardImage
                            className="img-fluid"
                            src={img}
                            width={"100%"}
                        />
                        <MDBCardBody>
                            <MDBRow>
                                {/*<MDBCol>*/}
                                {/*    <MDBCardTitle className="h3">Exhall and Wixford CC</MDBCardTitle>*/}
                                {/*    <hr className="my-4" />*/}
                                {/*    <MDBCardText>*/}
                                {/*        Some quick example text to build on the card title and make up*/}
                                {/*        the bulk of the card&apos;s content.*/}
                                {/*    </MDBCardText>*/}
                                {/*</MDBCol>*/}
                                {/*<MDBCol>*/}
                                    {/*<MDBCardTitle className="h3">Player Database</MDBCardTitle>*/}
                                    {/*<hr className="my-4" />*/}
                                    {/*<div className="pt-2">*/}
                                    {/*    <MDBBtn color="primary" className="waves-effect">*/}
                                    {/*        Buy now <MDBIcon far icon="gem" />*/}
                                    {/*    </MDBBtn>*/}
                                    {/*    <MDBBtn outline color="primary" className="waves-effect">*/}
                                    {/*        Download <MDBIcon icon="download" />*/}
                                    {/*    </MDBBtn>*/}
                                    {/*    <MDBBtn color="success">Success</MDBBtn>*/}
                                    {/*</div>*/}
                                    {/*<Pills />*/}
                                {/*</MDBCol>*/}
                                <CardGroup />
                            </MDBRow>

                            {/*<MDBBtn href="#" gradient="purple" rounded>*/}
                            {/*    BUTTON*/}
                            {/*</MDBBtn>*/}
                            <br/>
                        </MDBCardBody>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
        // </MDBContainer>
    )
}

export default JumbotronPage2;
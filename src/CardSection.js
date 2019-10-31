import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  CardGroup,
  Card,
  Badge
} from "react-bootstrap";

const ImageSection = () => {
  return (
    <div className="cardSection" style={{background: '#F5F7F6'}}>
      <div className="box-heading no-flex">
        <div class=" one-row">
          <p className="float-left">
            {" "}
            <b>Sites of the day</b> Previous Winners
          </p>
          <p className="float-right">
            {" "}
            <b>Mobile Excellence</b> Site of the week{" "}
          </p>
        </div>
      </div>

      <div  className="firstCards">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5daf26798807a807299854.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
                <Badge pill variant="primary ml-2 mr-2">
                  HM
                </Badge>
                <Badge pill variant="secondary mr-2">
                DEV
                </Badge>
                <Badge pill variant="success">
                  SOTD
                </Badge>
              </small>
            </Card.Footer>
          </Card>
          <Card
          style={{borderLeft: '1px solid rgba(0,0,0,.125)'}}>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5db00a85e4f9c491758404.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
                <Badge pill variant="primary ml-2 mr-2">
                  HM
                </Badge>
                <Badge pill variant="secondary mr-2">
                DEV
                </Badge>
                <Badge pill variant="success">
                  SOTD
                </Badge>
              </small>
            </Card.Footer>
          </Card>
          <Card
          style={{borderLeft: '1px solid rgba(0,0,0,.125)'}}>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5db980a3111ec887094381.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
                <Badge pill variant="primary ml-2 mr-2">
                  HM
                </Badge>
                <Badge pill  variant="info mr-2">
                DEV
                </Badge>
                <Badge pill variant="danger">
                  SOTD
                </Badge>
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>




      <div className="box-heading no-flex">
        <div class=" one-row">
          <p className="float-left">
            {" "}
            <b>Nominees</b>  We need your vote!
          </p>
          <p className="float-right">
            {" "}
            <b>Mobile Excellence</b> Site of the week{" "}
          </p>
        </div>
      </div>

      <div  className="firstCards mt-5">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5daf26798807a807299854.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
              </small>
            </Card.Footer>
          </Card>
          <Card
          style={{borderLeft: '1px solid rgba(0,0,0,.125)'}}>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5db00a85e4f9c491758404.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
              </small>
            </Card.Footer>
          </Card>
          <Card
          style={{borderLeft: '1px solid rgba(0,0,0,.125)'}}>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5db980a3111ec887094381.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>


      <div className="firstCards mt-5 mb-2">
        <CardGroup  className="mb-2">
          <Card>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5daf26798807a807299854.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
              </small>
            </Card.Footer>
          </Card>
          <Card
          style={{borderLeft: '1px solid rgba(0,0,0,.125)'}}>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5db00a85e4f9c491758404.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
              </small>
            </Card.Footer>
          </Card>
          <Card
          style={{borderLeft: '1px solid rgba(0,0,0,.125)'}}>
            <Card.Img
              variant="top"
              src="https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2019/10/5db980a3111ec887094381.jpg"
            />
            <Card.Body>
              <Card.Title>Interaction Design Lab Bern 19</Card.Title>
              <Card.Text>
                <p className="float-left"> From Switzerland</p>
                <p className="float-right"> October 30, 2019 </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                BY IMMERSIVE GARDEN
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>

<div> 
    <p style={{visibility:'hidden'}}> csdsdsdss </p>
</div>
    </div>
  );
};
export default ImageSection;

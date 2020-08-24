import React, {useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const [developerState, setDeveloperState] = useState({
    name: null,
    password: null
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(developerState.name, developerState.password)
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" 
              onChange={e => setDeveloperState({...developerState, name: e.target.value})} />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={e => setDeveloperState({...developerState, password: e.target.value})}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
      <h3>Hello {developerState.name}</h3>
          <p>I probably shouldn't tell you this, but your password is {developerState.password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
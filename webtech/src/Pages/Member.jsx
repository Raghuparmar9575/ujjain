import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchComponent from "../Components/Search";
import { IoCall } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";

const Member = () => {
  const [data, setdata] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/post`)
      .then((res) => {
        console.log("res : ", res);
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSearch = (searchTerm) => {
    const results = data.filter(
      (item) =>
        item.distric.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
    setSearchPerformed(true);
  };
  return (
    <>
      <div>
        <div className="search-bar">
          <SearchComponent onSearch={handleSearch} />
        </div>
        <div>
          {searchPerformed && searchResults.length === 0 ? (
            <p className="text-center text-danger">No results found</p>
          ) : (
            <div className="row justify-content-center">
              {searchResults.map((items) => (
                <Card style={{ width: "10rem", margin: "3px" }} key={items.id}>
                  <Card.Img
                    variant="top"
                    src="https://cdn-icons-png.flaticon.com/512/3787/3787061.png"
                  />
                  <Card.Body>
                    <Card.Title className="text-danger">
                      {items.name} {items.lname}
                    </Card.Title>
                    <Card.Text>
                      {items.address}
                      <br />
                      {items.distric} {items.state}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Gender : {items.gender}</ListGroup.Item>
                    <ListGroup.Item>
                      Blood Group : {items.bgroup}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Contact : <Link>{items.mobile}</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      DOB : {items.dob} <br /> <hr />
                      Last Date of Donate <br /> {items.ldate}
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link to="#">
                      <IoCall />
                    </Card.Link>
                    <Card.Link to="#">
                      <MdMessage />
                    </Card.Link>
                    <Card.Link to="#">
                      <MdOutlineWhatsapp />
                    </Card.Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr /> <hr />
      <div className="row justify-content-center">
        {data.map((items) => {
          return (
            <Card style={{ width: "10rem", margin: "3px" }} key={items.id}>
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/3787/3787061.png"
              />
              <Card.Body>
                <Card.Title className="text-danger">
                  {items.name} {items.lname}
                </Card.Title>
                <Card.Text>
                  {items.address} <br />
                  {items.distric} {items.state}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Gender : {items.gender}</ListGroup.Item>
                <ListGroup.Item>Blood Group : {items.bgroup}</ListGroup.Item>
                <ListGroup.Item>
                  Contact : <Link>{items.mobile}</Link>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  DOB : {items.dob} <br /> <hr />
                  Last Date of Donate <br /> {items.ldate}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link to="#">
                  <IoCall />
                </Card.Link>
                <Card.Link to="#">
                  <MdMessage />
                </Card.Link>
                <Card.Link to="#">
                  <MdOutlineWhatsapp />
                </Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Member;

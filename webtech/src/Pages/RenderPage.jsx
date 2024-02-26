import React from "react";
import { Button } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const Navigate = useNavigate();
  return (
    <div className="main-thank-msg">
      <div className="thank-msg" variant="outline-danger">
        Thank You For Register😍❤👍 <br />
        🙌🙌🙌
      </div>
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">
          <Button variant="outline-danger" onClick={() => Navigate("/Home")}>
            « Home
          </Button>
        </div>
        <div className="p-2 ms-auto"></div>
        <div className="p-2">
          <Button variant="outline-danger" onClick={() => Navigate("/Member")}>
            Member »
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default Page;

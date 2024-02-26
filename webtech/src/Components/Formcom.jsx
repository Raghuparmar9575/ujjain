import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function Forms(props) {
  return (
    <Form.Group as={Col} controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        autoComplete={props.autocomplete}
        id={props.id}
        isInvalid={props.error}
      />
      {props.error && (
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default Forms;

//select section
export const Selectcom = (props) => {
  return (
    <Form.Group as={Col}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Select
        aria-label="Default select example"
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
        autoComplete={props.autocomplete}
        isInvalid={props.error}
      >
        <option key={1}>{props.option}</option>
        <option>{props.value1}</option>
        <option>{props.value2}</option>
        <option>{props.value3}</option>
        <option>{props.value4}</option>
        <option>{props.value5}</option>
        <option>{props.value6}</option>
        <option>{props.value7}</option>
        <option>{props.value8}</option>
        <option>{props.value9}</option>
        <option>{props.value10}</option>
        <option>{props.value11}</option>
        <option>{props.value12}</option>
      </Form.Select>
      {props.error && (
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

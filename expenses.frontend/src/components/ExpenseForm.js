import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const descriptions = [
    'Groceries',
    'Credit Card',
    'Student Loans',
    'Eating out',
    'Gas',
  ];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          // create a new expense
        } else {
          // edit expense
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d) => (
              <option>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        <div style={{ marginTop: 'auto' }}>
          {isNewExpense ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button variant="danger">Delete</Button>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="default">Cancel</Button>
            </div>
          )}
        </div>
      </Row>
    </Form>
  );
};

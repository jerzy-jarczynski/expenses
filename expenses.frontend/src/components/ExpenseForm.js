import { React, useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { NewExpense } from '../services/expenses';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ expense, setIsEditing }) => {
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          NewExpense(dispatch, { description: description, amount: amount });
        } else {
          setIsEditing(false);
        }
      }}
    >
      <Row>
        <Col xs={5}>
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
        <Col xs={5}>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        <Col xs={2} style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ width: '100%' }}>
            {isNewExpense ? (
              <Button
                variant="primary"
                type="submit"
                style={{ display: 'block', width: '100%' }}
              >
                Add
              </Button>
            ) : (
              <div>
                <Button
                  variant="danger"
                  style={{ display: 'block', width: '100%' }}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  type="submit"
                  style={{ display: 'block', width: '100%' }}
                >
                  Save
                </Button>
                <Button
                  variant="default"
                  style={{ display: 'block', width: '100%' }}
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  );
};

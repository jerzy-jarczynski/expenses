import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetExpenses } from '../services/expenses';
import { Button, Row, Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => (
    <div key={e.id} style={{ marginBottom: '1rem' }}>
      <ListRow expense={e} />
    </div>
  ));
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col xs={5}>{expense.description}</Col>
        <Col xs={5} className="d-flex">
          ${expense.amount}
        </Col>
        <Col xs={2} className="d-flex">
          <Button
            style={{ display: 'block', width: '100%' }}
            variant="warning"
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

const initialState = {
  expenses: [],
};

export const ActionTypes = {
  SET_EXPENSES: 'SET_EXPENSES',
  NEW_EXPENSE: 'NEW_EXPENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const ActionCreators = {
  setExpenses: (payload) => ({ type: ActionTypes.SET_EXPENSES, payload }),
  newExpense: (payload) => ({ type: ActionTypes.NEW_EXPENSE, payload }),
  editExpense: (payload) => ({ type: ActionTypes.EDIT_EXPENSE, payload }),
  deleteExpense: (payload) => ({ type: ActionTypes.DELETE_EXPENSE, payload }),
};

export default function expensesReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] };
    case ActionTypes.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case ActionTypes.EDIT_EXPENSE:
      const editedExpenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        }
        return expense;
      });
      return { ...state, expenses: editedExpenses };
    case ActionTypes.DELETE_EXPENSE:
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      return { ...state, expenses: updatedExpenses };
    default:
      return state;
  }
}

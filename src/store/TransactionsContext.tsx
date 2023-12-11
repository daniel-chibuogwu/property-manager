import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import { initialTransactions } from '@/dev-data';

// Define the action types
type ActionType = 'WITHDRAW';

// Define the action interface
interface Action {
  type: ActionType;
  payload: {
    id: number;
    type: 'deposit' | 'withdraw';
    amount: string;
    date: string;
  };
}

// Define the state and context types
interface Transaction {
  id: number;
  type: 'deposit' | 'withdraw';
  amount: string;
  date: string;
}

interface TransactionState {
  transactions: Transaction[];
}

interface TransactionContextProps {
  state: TransactionState;
  dispatch: React.Dispatch<Action>;
}

const TransactionContext = createContext<TransactionContextProps | undefined>(
  undefined,
);

// Define the reducer function
const transactionReducer = (
  state: TransactionState,
  action: Action,
): TransactionState => {
  switch (action.type) {
    case 'WITHDRAW':
      return {
        ...state,
        transactions: [
          {
            id: action.payload.id,
            type: action.payload.type,
            amount: action.payload.amount,
            date: action.payload.date,
          },
          ...state.transactions, // Add existing transactions
        ],
      };
    default:
      return state;
  }
};

// Define the TransactionProvider component
interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(transactionReducer, {
    transactions: initialTransactions,
  });

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Custom hook to use the transaction context
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider');
  }
  return context;
};

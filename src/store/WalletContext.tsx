import React, { createContext, ReactNode, useContext, useReducer } from 'react';

// Define the action types
type ActionType = 'WITHDRAW';

// Define the action interface
interface Action {
  type: ActionType;
  payload: number; // Amount for withdrawal
}

// Define the state and context types
interface BalanceState {
  totalBalance: number;
}

interface BalanceContextProps {
  state: BalanceState;
  dispatch: React.Dispatch<Action>;
}

const BalanceContext = createContext<BalanceContextProps | undefined>(
  undefined,
);

// Define the reducer function
const balanceReducer = (state: BalanceState, action: Action): BalanceState => {
  switch (action.type) {
    case 'WITHDRAW':
      return {
        ...state,
        totalBalance: state.totalBalance - action.payload,
      };
    default:
      return state;
  }
};

// Define the BalanceProvider component
interface BalanceProviderProps {
  children: ReactNode;
}

export const BalanceProvider: React.FC<BalanceProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(balanceReducer, {
    totalBalance: 120000,
  });

  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
};

// Custom hook to use the balance context
export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};

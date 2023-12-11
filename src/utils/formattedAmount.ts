export const formattedAmount = (amount: number) => {
  return amount
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .replace('$', '')
    .split('.')[0];
};

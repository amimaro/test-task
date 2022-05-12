export const abbreviateAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
};

export const reverseArray = (list: any[]) => {
  const reversedArray = [];
  for (let i = list.length - 1; i >= 0; i--) {
    reversedArray.push(list[i]);
  }
  return reversedArray;
};

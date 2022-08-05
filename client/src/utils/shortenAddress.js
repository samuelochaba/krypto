export const shortenAddress = (str) => {
  return `${str.slice(0, 5)}...${str.slice(str.length - 4)}  `;
};

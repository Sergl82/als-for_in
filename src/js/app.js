export default function orderByProps(obj, order) {
  const alphabetOrder = [];
  const requestedOrder = [];
  for (const prop in obj) {
    if (order.includes(prop)) {
      requestedOrder.push({
        key: prop,
        value: obj[prop],
      });
    } else {
      alphabetOrder.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  alphabetOrder.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });
  requestedOrder.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));

  return [...requestedOrder, ...alphabetOrder];
}

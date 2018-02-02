const deafultMockTradeList = [
  {company: {id: 'cmp_00001', label: 'Google'}, quantity: 900},
  {company: {id: 'cmp_00002', label: 'Microsoft'}, quantity: 100},
  {company: {id: 'cmp_00003', label: 'Amazon'}, quantity: -150},
];

export function mockFetchTradeApi() {
  console.log('mock fetch trade api');
  return deafultMockTradeList;
}

export function mockUpdateTradeApi(body) {
  console.log('mock update trade api');
  const {companyId, quantity} = body;
  for (let item of deafultMockTradeList) {
    if (item.company.id === companyId) {
      item.quantity += parseInt(quantity, 10);
      break;
    }
  }
}

import {mockFetchTradeApi, mockUpdateTradeApi} from './mockApi';

it('mockFetchTradeApi should return companies', () => {
  const companies = mockFetchTradeApi();
  expect(companies[0]).toEqual({company: {id: 'cmp_00001', label: 'Google'}, quantity: 900});
});

it('mockFetchTradeApi should return companies', () => {
  mockUpdateTradeApi({'companyId': 'cmp_00001', 'quantity': 100});
  const companies = mockFetchTradeApi();
  expect(companies[0]).toEqual({company: {id: 'cmp_00001', label: 'Google'}, quantity: 1000});
});

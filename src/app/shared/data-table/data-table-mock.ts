import { times, sample, random } from 'lodash';
import { IPagination } from './data-table-definitions';
import timeout from './timeout';

const dataSet = [
    [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800' ],
    [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750' ],
    [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000' ],
    [ 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060' ],
    [ 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700' ],
    [ 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000' ],
    [ 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500' ],
    [ 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900' ],
    [ 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500' ]
];

/**
 * For any pagination coming, we cache the result.
 * This is not a good practice for real data, since
 * you need to connect your store data to paginate
 * for user instead of requesting each time.
 * This is only and only for mock purposes.
 */
const cacheMock = {};

export async function handleMockTableRequests (options: IPagination) {
  const key = JSON.stringify({
    start: options.start,
    length: options.length
  });
  if (cacheMock[key]) {
    return cacheMock[key];
  }
  await timeout(random(600, 1000));
  const result = {
    draw: 0,
    recordsTotal: 100,
    recordsFiltered: 100,
    data: times(10 , () => sample(dataSet))
  };
  cacheMock[key] = result;
  return result;
}

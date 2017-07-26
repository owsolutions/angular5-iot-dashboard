/**
 * Defines the pagination parameters;
 * Anytime you change a view parameter, like page number,
 * order, etc this params will pass to fetch data from
 * server.
 */

export interface IPagination {
  start: Number;
  length: Number;
  draw: Number;
}

export function createPagiantion (aoData: any): IPagination {
  const options: any = {};
  aoData.forEach(data => {
    options[data.name] = data.value;
  });
  return options;
}

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

const mapToObj = (map: any) => {
  if (!map) return {};
  const obj = {};
  map.forEach((v: any, k: any) => {
    obj[k] = v;
  });
  return obj;
};

const objToMap = (obj: any) => {
  if (!obj) return {};
  return obj.reduce(
    (acc: any, val: any) => ({ ...acc, ...{ [val.id]: val } }),
    {},
  );
};

const mapToArr = (map: any) => {
  return Object.values(map);
};

const getTime = () => {
  const time: any = new Date();
  const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
  const minutes =
    time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
  const milliseconds = time.getMilliseconds();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time
    .getFullYear()
    .toString()
    .slice(-2);

  return {
    time: time.toString(),
    year,
    month,
    day,
    hours,
    minutes,
    milliseconds,
  };
};

module.exports = {
  mapToObj,
  objToMap,
  mapToArr,
  getTime,
};

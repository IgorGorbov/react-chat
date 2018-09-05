const mapToObj = (map: any) => {
  const obj = {};
  map.forEach((v: any, k: any) => {
    obj[k] = v;
  });
  return obj;
};

const objToMap = (obj: any) => {
  return obj.reduce(
    (acc: any, val: any) => ({ ...acc, ...{ [val.id]: val } }),
    {},
  );
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
    time,
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
  getTime,
};

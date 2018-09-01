import { Map, List } from 'immutable';

export function arrToMap(arr: any, DataRecord = Map) {
  return arr.reduce(
    (acc: any, item: any) => acc.set(item.id, DataRecord(item)),
    DataRecord({}),
  );
}

export function mapToArr(obj: any) {
  return List(obj.valueSeq().toJS());
}

export enum Status {
  Online = 'Online',
  Offline = 'Offline',
  Away = 'Away',
  Busy = 'Busy',
}

export const statusColors = {
  [Status.Online]: 'green',
  [Status.Offline]: 'grey',
  [Status.Away]: '#dede0f',
  [Status.Busy]: 'red',
};

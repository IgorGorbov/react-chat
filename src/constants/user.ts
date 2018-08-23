export const defaultAvatar = 'https://emilcarlsson.se/assets/mikeross.png';
export enum Status {
  Online = "Online",
  Offline = "Offline",
  Away = "Away",
  Busy = "Busy"
}

export const statusColors = {
  [Status.Online]: 'green',
  [Status.Offline]: 'grey',
  [Status.Away]: 'yellow',
  [Status.Busy]: 'red'
};

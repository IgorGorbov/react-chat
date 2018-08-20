declare interface IUserCard {
  id: number,
  name: string,
  avatar: string,
}

declare interface IMessage {
  from: string,
  to: string,
  text: string,
  date: string,
  isRead: boolean
}

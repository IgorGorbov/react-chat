declare interface ISectionMessagesList {
  messages: IMessage[] | []
}

declare interface IUserCard {
  id: number,
  name: string,
  avatar: string,
}

declare interface IMessage {
  id: string,
  from: string,
  to: string,
  text: string,
  date: string,
  isRead: boolean
}

declare interface ITextProps {
  textColor: string,
  textSize: string,
  textLineHeight: string,
  textWeight: string,
  textFontFamily: string
}


declare interface ISectionMessagesList {
  messages: IMessage[] | [];
}

declare interface IMessage {
  id: number;
  from: IUser;
  to: IUser;
  text: string;
  date: string;
  isRead: boolean;
  deletedBy: number[];
}

declare interface ITextProps {
  textColor: string;
  textSize: string;
  textLineHeight: string;
  textWeight: string;
  textFontFamily: string;
}

declare enum Status {
  Online = 'Online',
  Offline = 'Offline',
  Away = 'Away',
  Busy = 'Busy',
}

declare interface IUser {
  id: number;
  name: string;
  avatar: string;
  status: Status.Online | Status.Offline | Status.Busy | Status.Away;
}

declare interface ICurrentChat {
  id: number;
  companion: IUser;
}

declare interface IChatMap {
  [id: number]: {
    id: number;
    users: IUser[];
    messages: IMessage[];
  };
}

declare interface IChat {
  id: number;
  users: IUser[];
  messages: IMessage[];
}

interface ICurrentChat {
  currentChatId: number;
  companion: IUser;
}

interface IFilters {
  search: string;
  selectedMessages: number[];
}

interface IImmutableUser extends Map<string, any> {
  toJS(): IUser;
  get<K extends keyof IUser>(key: K): IUser[K];
}

interface IImmutableCurrentChat extends Map<string, any> {
  toJS(): ICurrentChat;
  get<K extends keyof ICurrentChat>(key: K): ICurrentChat[K];
}

interface IImmutableIFilters extends Map<string, any> {
  toJS(): IFilters;
  get<K extends keyof IFilters>(key: K): IFilters[K];
}

declare interface IState {
  session: IImmutableUser;
  currentChat: IImmutableCurrentChat;
  users: IUser[];
  chats: IChatMap[];
  filters: IImmutableIFilters;
}

interface Irefs {
  [key: string]: Element;
  stepInput: HTMLInputElement;
}

declare interface ISocket {
  dispatchAction: (action: object) => void;
  changeUserStatus: (user: IUser) => void;
  getUsers: (type: string, cb: (err: any, users: IUser[]) => void) => void;
  register: (name: string, cb: (err: any, user: IUser) => void) => void;
  addChat: (companion: IUser, cb: (err: any, chat: IChat) => void) => void;
  deleteChat: (idChat: number) => void;
  getUserChats: (cb: (err: any, chats: IChat[]) => void) => void;
  addMessage: (text: string, chatId: number, companion: IUser) => void;
  deleteMessages: (
    payload: number[],
    cb: (err: any, messages: IMessage[]) => void,
  ) => void;
}

declare module 'react-wow';

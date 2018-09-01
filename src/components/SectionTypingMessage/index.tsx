import * as React from 'react';
import styled from 'styled-components';
import { Picker } from 'emoji-mart';
import { Icon } from 'semantic-ui-react';
import {
  SectionNewMessage,
  UserButton,
  UserInput,
} from '../../styledComponents';
import {
  BaseEmoji,
  EmojiData,
} from 'emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index';

const PickerWrapper = styled.div`
  position: absolute;
  bottom: 36px;
  right: 0;
  z-index: 10;
`;

interface ISectionTypingProps {
  currentUser: IUser;
  companion: IUser;
  currentChatId: number;
  newMessage: (
    currentUser: IUser,
    currentChatId: number,
    companion: IUser,
    text: string,
  ) => {
    type: string;
    payload: {
      currentUser: IUser;
      currentChatId: number;
      companion: IUser;
      text: string;
    };
  };
}

interface ISectionTypingState {
  inputText: string;
  isOpenPicker: boolean;
}

class SectionTypingMessage extends React.Component<
  ISectionTypingProps,
  ISectionTypingState
> {
  public constructor(props: ISectionTypingProps) {
    super(props);
    this.state = {
      inputText: '',
      isOpenPicker: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
  }

  public handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      inputText: e.target.value,
    });
  }

  public handleOnClick(): void {
    if (this.state.inputText === '') {
      return;
    }
    this.setState({
      inputText: '',
    });
    const { currentUser, currentChatId, newMessage, companion } = this.props;
    newMessage(currentUser, currentChatId, companion, this.state.inputText);
  }

  public togglePicker(): void {
    this.setState({
      isOpenPicker: !this.state.isOpenPicker,
    });
  }

  public addEmoji(emoji: EmojiData): void {
    const emojiNative = emoji as BaseEmoji;
    this.setState({
      inputText: this.state.inputText + emojiNative.native,
    });
  }

  public handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      this.handleOnClick();
    }
  };

  public render() {
    return (
      <SectionNewMessage>
        {this.state.isOpenPicker ? (
          <PickerWrapper>
            <Picker
              showPreview={false}
              showSkinTones={false}
              perLine={7}
              sheetSize={32}
              custom={[]}
              onSelect={this.addEmoji}
            />
          </PickerWrapper>
        ) : null}

        <UserInput
          inputwidth="90%"
          placeholder="Write your message ..."
          icon={
            <Icon
              onClick={this.togglePicker}
              name="smile outline"
              circular={true}
              link={true}
            />
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            this.handleOnChange(e)
          }
          value={this.state.inputText}
          onKeyPress={(e: React.KeyboardEvent) => this.handleKeyPress(e)}
        />
        <UserButton
          buttonwidth="10%"
          buttonmargin="0 -4px 0 0"
          buttonheight="40px"
          size="large"
          primary={true}
          icon={true}
          onClick={this.handleOnClick}
        >
          <Icon name="send" />
        </UserButton>
      </SectionNewMessage>
    );
  }
}

export default SectionTypingMessage;

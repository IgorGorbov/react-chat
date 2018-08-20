import * as React from 'react';
import { Image } from 'semantic-ui-react';

import './styles.css';

const UserCard = (props: IUserCard): JSX.Element => {
  return (
    <div className="userCardWrapper">
      <div className="imageWrapper">
        <Image
          className="userCardAvatar"
          src={props.avatar}
          size="tiny"
          circular={true}
        />
        <span className="userStatus" />
      </div>
      <div className="userInfoWrapper">
        <p className="userCardName">{props.name}</p>
        <p className="userCardMessage">Lorem ipsum dolor sit amet.</p>
      </div>
      <p className="newCountMessage">3</p>
    </div>
  );
};

export default UserCard;

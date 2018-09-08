import * as React from 'react';
import { connect } from 'react-redux';
import { UserInput } from '../../styledComponents/index';
import { search } from '../../actions/index';

interface ISearchInputProps {
  search: (text: string) => { type: string; payload: string };
}

class SearchInput extends React.Component<ISearchInputProps, {}> {
  public onHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    // tslint:disable-next-line: no-shadowed-variable
    const { search } = this.props;
    search(event.target.value);
  }
  public render() {
    return (
      <UserInput
        icon="users"
        iconPosition="left"
        placeholder="Search users ..."
        inputwidth="100%"
        inputcolor="white"
        inputbgc="#485F78"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          this.onHandleChange(event)
        }
      />
    );
  }
}

const mapDispatchToProps: {
  search: (text: string) => { type: string; payload: string };
} = {
  search,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchInput);

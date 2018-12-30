import React from 'react';
import DatePicker from '../component/DatePicker/DatePicker';


class GetArticles extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        <h1>Get Articles</h1>
        <DatePicker/>
      </div>
    )
  }
}

export default GetArticles
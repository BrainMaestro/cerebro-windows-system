import React, { Component, PropTypes } from 'react';
import './pure-table.css';

export default class Preview extends Component {
  render() {
    const { delayed } = this.props;

    return (
      <div className='preview'>
        <table className='pure-table'>
          <thead>
            <tr>
              <th>Command</th>
              <th>Delay</th>
              <th>Times</th>
            </tr>
          </thead>
          {Object.keys(delayed).map(title => {
            const [, command, delay] = title.match(/(.*) in (.*)/);
            return (
              <tr key={title}>
                <td>{command}</td>
                <td>{delay}</td>
                <td>{delayed[title]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

Preview.propTypes = {
  delayed: PropTypes.object.isRequired,
};

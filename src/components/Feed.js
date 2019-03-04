import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles.css';
import FeedItem from './FeedItem';

class Feed extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.feed}>
        <FeedItem onClick={() => this.props.setTheme(0)} />
        <FeedItem onClick={() => this.props.setTheme(1)} />
        <FeedItem onClick={() => this.props.setTheme(2)} />
      </div>
    );
  }
}

export default withStyles(styles)(Feed);

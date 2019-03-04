import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles.css';

class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = { elevation: 2 };
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper
                className={classes.feedItem}
                elevation={this.state.elevation}
                onMouseOver={() => this.setState({ elevation: 6 })}
                onFocus={() => undefined}
                onMouseOut={() => this.setState({ elevation: 2 })}
                onBlur={() => undefined}
            >
                <h1>Im a feed item</h1>
                <p>Lots of fun here</p>
                <div className={classes.buttons}>
                    <Button color="primary" onClick={this.props.onClick}>
                        Primary
                    </Button>
                    <Button color="secondary" onClick={this.props.onClick}>
                        Secondary Button
                    </Button>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(FeedItem);

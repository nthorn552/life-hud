import React from 'react';
import AppBar from 'material-ui/AppBar';
export default class HeaderAppBar extends React.Component {
    constructor(props: { value: number, open: boolean }) {
        super(props);
        this.state = { value: 1, open: false };
    }
    render() {
        return (
            <div>
                <AppBar title="MAVLink Online" />
            </div>
        );
    };
}
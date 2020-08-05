import React from 'react';

class SelectItem extends React.Component {
    render() {
        return (
            <option value={this.props.value}>{this.props.value}</option>
        )
    }
}

export default SelectItem;
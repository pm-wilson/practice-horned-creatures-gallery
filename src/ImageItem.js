import React from 'react';

class ImageItem extends React.Component {
    render() {
        return (
            <section>
                <h3>{this.props.creature.title} with {this.props.creature.horns} {this.props.creature.horns === 1 ? 'horn' : 'horns'}</h3>
                <img alt={this.props.creature.title} src={this.props.creature.url.includes('modernfarmer') ? 'http://www.placekitten.com/200/200' : this.props.creature.url} />
                <p>{this.props.creature.description}</p>
            </section>
        )
    }
}

export default ImageItem;
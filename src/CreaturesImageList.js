import React from 'react';
import ImageItem from './ImageItem.js';

class CreaturesImageList extends React.Component {
    render() {
        const creatureData = this.props.data;

        return (
            <main>
                {creatureData.map((creature, i) => {
                    return (
                        <ImageItem creature={creature} key={i} />
                    )
                })}
            </main>
        )
    }
}

export default CreaturesImageList;
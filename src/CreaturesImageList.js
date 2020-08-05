import React from 'react';
import ImageItem from './ImageItem.js';

class CreaturesImageList extends React.Component {
    render() {
        const creatureData = this.props.data;
        const keywordFilterData = creatureData.filter((item) => {
            return this.props.filterData.keywordFilter === 'All' ? true : item.keyword === this.props.filterData.keywordFilter
        });
        const hornFilterData = keywordFilterData.filter((item) => {
            return this.props.filterData.hornFilter === 'All' ? true : item.horns === Number(this.props.filterData.hornFilter)
        });

        return (
            <main>
                {
                    hornFilterData.map((creature, i) => {
                        return (
                            <ImageItem creature={creature} key={i} />
                        )
                    })
                }
            </main >
        )
    }
}

export default CreaturesImageList;
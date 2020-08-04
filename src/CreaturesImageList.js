import React from 'react';

class CreaturesImageList extends React.Component {
    render() {
        const creatureData = this.props.data;

        return (
            <main>
                {creatureData.map((creature) => {
                    return (
                        <section key={creature.keyword}>
                            <h3>{creature.title} with {creature.horns} {creature.horns === 1 ? 'horn' : 'horns'}</h3>
                            <img alt={creature.title} src={creature.url} />
                            <p>{creature.description}</p>
                        </section>
                    )
                })}
            </main>
        )
    }
}

export default CreaturesImageList;
import React from 'react';
import SelectItem from './SelectItem.js';

class CreaturesHeader extends React.Component {
    handleKeywordFilter = (e) => {
        const keywordFilter = e.target.value;
        this.props.onDropdownSelect({ keywordFilter })
    }

    handleHornFilter = (e) => {
        const hornFilter = e.target.value;
        this.props.onDropdownSelect({ hornFilter })
    }

    render() {
        return (
            <header>
                <h1>Great Horned Creature Gallery</h1>
                <form>
                    <h4>Filters</h4>
                    <label><span>Keyword:</span>
                        <select name='keyword' onChange={this.handleKeywordFilter}>
                            {this.props.keywords.map((keyword, i) => {
                                return <SelectItem value={keyword} key={i} />
                            })}
                        </select></label>
                    <label><span>Number of Horns:</span>
                        <select name='horns' onChange={this.handleHornFilter}>
                            {this.props.horns.map((horn, i) => {
                                return <SelectItem value={horn} key={i} />
                            })}
                        </select>
                    </label>
                </form>
            </header>
        )
    }
}

export default CreaturesHeader;
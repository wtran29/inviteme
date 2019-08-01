import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onSearchSubmit = (e) => {
        /* e.preventDefault(); */
        this.setState({ term: e.target.value })

        this.props.onChange(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSearchSubmit} className="ui search">
                    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                        <h1 >Active Events</h1>
                    </div>
                    <div style={{ float: 'right' }} className="field ui icon input">
                        
                        <input
                            class="prompt"
                            value={this.state.term}
                            onChange={this.onSearchSubmit}
                            type='text'
                            placeholder="Search events..."
                        />
                        <i class="search icon"></i>
                    </div>
                </form>
            </div>  
        )

    }
}


export default SearchBar;
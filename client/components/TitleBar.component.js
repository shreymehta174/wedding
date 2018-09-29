/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Dhwani</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> Shrey
                </span>
                <div className="wedding-date">24<sup>th</sup> JANUARY, 2019</div>
            </header>
        );
    }
}

export default TitleBar;

import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from 'react-redux';
import './directory.styles.scss';

const Directory = ({sections}) =>  ({

    render() {
        return (
            <div className="directory-menu">
                {sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
});

const mapStateToProps = state => ({
    sections: selectDirectorySections(state)
});

export default connect(mapStateToProps, null)(Directory);
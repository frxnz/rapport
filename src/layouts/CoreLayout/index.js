const React = require('react');
const T = require('prop-types');
const Header = require('../../components/Header');
const Classes = require('./styles.scss');

// Pull global styles
require('../../styles/core.scss');

const CoreLayout = ({ children }) => (

    <div>
        <Header />
        <div className={Classes.mainContainer}>
            {children}
        </div>
    </div>
);

CoreLayout.propTypes = {
    children: T.element.isRequired
};

module.exports = CoreLayout;

import React from 'react';

const sectionHeader = (props) => {
    return (

        <div className={props.className}>
            <h3 className="text-center font-weight-bold text-capitalize pb-3">{props.title}</h3>
            <p className="text-center font-weight-light w-50 mx-auto py-3">{props.description}</p>
        </div>

    );
}

export default sectionHeader;
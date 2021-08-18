import React, { ReactElement } from 'react';

const Br = (props: { space?: number }): ReactElement => (
    <div
        style={{ height: 8 * (props.space === undefined ? 2 : props.space) }}
    />
);

export default Br;

import React, { ReactElement } from 'react';

import { Fade, Grow } from '@material-ui/core';

const duration = 250;

const ViewFade = (props: {
    children: ReactElement[];
    index: number;
    variant?: 'fade' | 'grow';
}): ReactElement => {
    const { children, index, variant = 'fade' } = props;

    const [state, setState] = React.useState<{
        from: number;
        to: number;
        moving: boolean;
    }>({
        from: index,
        to: index,
        moving: false,
    });

    React.useEffect(() => {
        setState((s) => ({
            ...s,
            moving: true,
            from: s.to,
            to: index,
        }));
    }, [index]);

    React.useEffect(() => {
        if (state.moving) {
            const timeout = setTimeout(() => {
                setState((s) => ({ ...s, moving: false }));
            }, duration);

            return () => clearTimeout(timeout);
        }
    }, [state.moving]);

    const Comp = variant === 'fade' ? Fade : Grow;

    return (
        <Comp timeout={duration / 2} in={!state.moving}>
            {children[state.moving ? state.from : state.to]}
        </Comp>
    );
};

export default ViewFade;

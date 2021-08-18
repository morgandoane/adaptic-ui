import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';

const AppButton = (
    props: ButtonProps & { loading?: boolean }
): ReactElement => {
    const { loading, ...args } = props;
    return (
        <Button
            endIcon={loading ? undefined : args.endIcon}
            startIcon={loading ? undefined : args.startIcon}
            disabled={args.disabled == true || loading == true}
            {...args}
        >
            {loading == true ? (
                <div>
                    <CircularProgress
                        style={{ height: 24, width: 24, color: 'white' }}
                    />
                </div>
            ) : (
                args.children
            )}
        </Button>
    );
};

export default AppButton;

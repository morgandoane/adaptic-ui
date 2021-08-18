import React, { ReactElement } from 'react';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { TeamEdit } from '../../index';
import ResponsiveDialog from 'components/ResponsiveDialog';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const EditTeam = (props: {
    edits: null | TeamEdit;
    handleEdits: (data: TeamEdit | null) => void;
}): ReactElement => {
    const classes = useStyles();
    const { edits, handleEdits } = props;

    return (
        <ResponsiveDialog
            open={edits !== null}
            onClose={() => handleEdits(null)}
        >
            <div className={classes.root}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5">Edit team</Typography>
                    <IconButton>
                        <Close />
                    </IconButton>
                </div>
            </div>
        </ResponsiveDialog>
    );
};

export default EditTeam;

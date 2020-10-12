import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LetterItems from './LetterItems.js'


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        maxHeight: "",
        background: 'rgb(255,255,255, .85)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'em'
    },
});

function LetterBuilder({history}) {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_POLICIES' });
    }, [dispatch])

    const directToAddress = () => {
        history.push('/address')
    }
    const directBack = () => {
        history.push('/zip')
    }
    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <div className={classes.test}>
                    <CardActions>
                            <LetterItems directToAddress={directToAddress} directBack={directBack}/>
                    </CardActions>
                </div>
                    <CardContent>
                    </CardContent>
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(LetterBuilder)
import {useDispatch} from "react-redux";
import {decrement, increment} from "./counterReducer.ts";
import {Button, ButtonGroup, Typography} from "@mui/material";
import {useAppSelector} from "../../app/store/store.ts";

export const ContactPage = () => {
    const {data} = useAppSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <>
           <Typography variant="h2">Contact Page </Typography>
            <Typography variant="body1">The data is: {data}</Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(increment(1))} color={'secondary'}>Increment</Button>
                <Button onClick={() => dispatch(increment(5))} color={'primary'}>Increment by 5</Button>
                <Button onClick={() => dispatch(decrement(1))} color={'error'}>Decrement</Button>
                <Button onClick={() => dispatch(decrement(5))} color={'error'}>Decrement by 5</Button>
            </ButtonGroup>
        </>
    )
}

import {Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography} from "@mui/material";
import {
    useLazyGet400ErrorQuery, useLazyGet401ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGet500ErrorQuery,
    useLazyGetValidationErrorQuery
} from "./errorApi.ts";
import {useState} from "react";

export const AboutPage = () => {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    
    const[trigger400Error] = useLazyGet400ErrorQuery();
    const[trigger401Error] = useLazyGet401ErrorQuery();
    const[trigger404Error] = useLazyGet404ErrorQuery();
    const[trigger500Error] = useLazyGet500ErrorQuery();
    const[triggerValidationError] = useLazyGetValidationErrorQuery();
    
    const getValidationErrors = async () => {
        try {
            await triggerValidationError().unwrap(); 
        } catch (error: any) {
            if (error && typeof error === 'object' && 'message' in error && typeof (error as {message: unknown}).message ==='string') {
                const errorArray = (error as {message: string}).message.split('\n ');
                setValidationErrors(errorArray);
            }

        }
    }
    
    return (
       <Container maxWidth='lg'>
           <Typography gutterBottom variant='h3'>Errors for testing</Typography>
           <ButtonGroup>
               <Button variant='contained' onClick={() => trigger400Error().catch(err => console.log(err))}>Test 400 Error</Button>
               <Button variant='contained' onClick={() => trigger401Error().catch(err => console.log(err))}>Test 401 Error</Button>
               <Button variant='contained' onClick={() => trigger404Error().catch(err => console.log(err))}>Test 404 Error</Button>
               <Button variant='contained' onClick={() => trigger500Error().catch(err => console.log(err))}>Test 500 Error</Button>
               <Button variant='contained' onClick={() => getValidationErrors()}>Test Validation Error</Button>
               
           </ButtonGroup>
           {validationErrors.length > 0 && (
               <Alert severity="error">
                   <AlertTitle>
                       Validation Errors
                       <List>
                           {validationErrors.map((v, index) => <ListItem key={index}>{v}</ListItem>)}
                       </List>
                   </AlertTitle>
               </Alert>
           )}
       </Container>
    )
}

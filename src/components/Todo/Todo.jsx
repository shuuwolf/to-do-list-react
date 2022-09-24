import { Wrapper, ButtonContainer } from "./styles.js";
import * as React from 'react';


import { Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';

const Tasks = {
    id: 2,
    name: "Stody REact",
    description: "Study",
    isChecked: true
}


function Todo(Tasks){
    return(
        <Wrapper>
            <ul>
                <li>
                    <div>
                        <Checkbox />
                        <div>
                            <h2>Estudar</h2>
                            <p>alguma coisa</p>
                        </div>
                    </div>
                    <ButtonContainer>
                        <Button variant="contained" startIcon={<DeleteIcon />}></Button>
                        <Button variant="contained" startIcon={<CreateIcon />}></Button>
                    </ButtonContainer>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Todo;
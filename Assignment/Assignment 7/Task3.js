import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const UserList = (props) => {

  return (
    <div>
    <List >
            {
                props.submittedList.map((value) =>
                (
                    <ListItem>
                    <ListItemText
                        primary={value}
                    />
                    </ListItem>
                ))
            }
    </List>
    </div>
  )
}

export default UserList

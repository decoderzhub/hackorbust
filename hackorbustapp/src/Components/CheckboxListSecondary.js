import React, { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

export default function CheckboxListSecondary({listData}) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    console.log(listData)
  
    return () => {
    }
  }, [])
  

  return (
    <List dense sx={{ width: '100%', maxWidth: "lg", bgcolor: 'background.paper'}}>
      {listData !== undefined ? listData.map((data, index) => {
        const labelId = `checkbox-list-secondary-label-${data.title}`;
        return (
          <ListItem
            key={data.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle()}
                checked={checked.indexOf(data.completed) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar none`}
                  src={""}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={data.level} />
            </ListItemButton>
          </ListItem>
        );
      }): <div>No Data!!!</div>}
    </List>
  );
}
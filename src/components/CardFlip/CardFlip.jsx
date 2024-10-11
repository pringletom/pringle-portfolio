import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
const CardFlip = (props) => {
    const {cardText, cardImage} = props
    const [flipped, setFlipped] = useState(false)
    const handleClick = () => {
        setFlipped(!flipped)
    }
    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
           <Item style={{height: '220px'}}onClick={handleClick}>
                <img
                  src={cardImage
                    } 
                  style={{height: '220px', width: '200px'}}
                />
              </Item>
              <Item style={{height: '220px'}} onClick={handleClick}>
                  <p
                  >{cardText}</p>
              </Item>
        </ReactCardFlip>
      )
}

export default CardFlip;
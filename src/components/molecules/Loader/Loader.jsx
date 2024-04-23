import { CirclesToRhombusesSpinner } from 'react-epic-spinners'
import { LoaderText, LoaderContainer } from './styled';

const Loader = () => {
    const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];
  
    const generateUniqueId = () => {
      let id = 0;
      return () => {
        id += 1;
        return id.toString();
      };
    };
  
    const uniqueIdGenerator = generateUniqueId();
  
    return (
      <LoaderContainer>
        {letters.map((letter, index) => {
          if (index === 1) {
            return (
              <CirclesToRhombusesSpinner
                key={uniqueIdGenerator()}
                animation-duration={1200}
                circles-num={3}
                circle-size={50}
                color="#000"
              />
            );
          }
          return (
            <LoaderText key={uniqueIdGenerator()} bounceIndex={index}>
              {letter}
            </LoaderText>
          );
        })}
      </LoaderContainer>
    );
  };
  
  export default Loader;
  

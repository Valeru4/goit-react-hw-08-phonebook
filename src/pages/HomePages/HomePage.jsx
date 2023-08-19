import { Navigate, useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Heading,
  Image,
  ImageContainer,
  MainContent,
  Section,
  TextBlock,
} from './HomePage.styled';
import { useSelector } from 'react-redux';
import {
  TokenSelector,
  authentificatedSelector,
} from 'redux/authSlice/selectors';

const Homepage = () => {
  const authentificated = useSelector(authentificatedSelector);
  const token = useSelector(TokenSelector);
  const navigate = useNavigate();
  const onHandleClick = () => {
    if (!authentificated) {
      navigate('/login');
    } else {
      navigate('/contacts');
    }

    if (!token) {
      navigate('/register');
    } else {
      navigate('/contacts');
    }
  };

  console.log('home');
  return (
    <Section>
      <Heading>Welcome to Phonebook App</Heading>
      <MainContent>
        <ImageContainer>
          <Image
            src="https://i.ibb.co/7G3C8QG/phonebook-app.png"
            alt="Phonebook App"
          />
        </ImageContainer>
        <TextBlock>
          <p>
            This is the home page of the Phonebook App. Get started by managing
            your contacts easily.
          </p>
          <Button onClick={onHandleClick} type="button">
            Get Started
          </Button>
        </TextBlock>
      </MainContent>
    </Section>
  );
};

export default Homepage;

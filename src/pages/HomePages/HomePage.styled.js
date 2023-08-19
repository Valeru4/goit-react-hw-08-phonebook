import styled from 'styled-components';

export const Section = styled.section`
  font-family: Arial, sans-serif;
  background-color: #a9a9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  height: 100vh;
`;

export const Heading = styled.h1`
  color: #333;

  font-size: 26px;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  background-color: #fff;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  width: 800px;
  max-width: 100%;
`;

export const ImageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const TextBlock = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #555;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor === 'light' ? '#fbfbfd' : '#000'};
  padding: 30px;
  margin-bottom: 15px;

  > h1 {
    color: ${({ backgroundColor }) => backgroundColor === 'light' ? '#000' : '#fbfbfd'};
    margin-top: 10px;
    font-size: 42px;
    font-weight: bold;
  }

  > h2 {
    color: ${({ backgroundColor }) => backgroundColor === 'light' ? '#000' : '#fbfbfd'};
    font-size: 21px;
    font-weight: normal;
    margin-bottom: 17px;
  }

  > p {
    font-size: 14px;
    color: #7b7b80;
    margin-bottom: 10px;
    max-width: 350px;
    text-align: center;
  }

  > div > a {
    font-size: 18px;
    color: #0c6cce;
    text-decoration: none;
    padding: 30px;

    &:hover {
      text-decoration: underline;
    }
  }

  > img {
    margin-top: 30px;
  }
`;
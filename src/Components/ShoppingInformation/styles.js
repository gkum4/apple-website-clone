import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  height: 50px;

  > p {
    color: #000;
    font-size: 14px;

    > a {
      text-decoration: none;
      color: #0c6cce;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
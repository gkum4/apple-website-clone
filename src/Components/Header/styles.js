import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #383838;
  position: fixed;
  height: 50px;
  top: 0;
  width: 100vw;
  left: 0;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px 15px 30px;

    > a {
      font-size: 14px;
      font-weight: normal;
      text-decoration: none;
      color: #cacaca;

      &:hover {
        transition: color 0.2s;
        color: #fff;
      }
    }

    > img {
      width: 15px;
      object-fit: contain;
    }
  }
`;
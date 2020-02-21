import styled from 'styled-components';

export const NavStyles = styled.div`
  padding: 50px 0;

  .nav {
    background: #fff;
    box-shadow: 0 0 0 1px #e1e8ef;
    border-radius: 4px;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  .navbar-brand,
  .navbar-nav,
  .nav-link {
    font-size: 20px;
    font-weight: bold;
    color: #2d68c4;
    margin: 0 20px;
  }
`;

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Routes = styled.div`
  a {
    font-weight: bold;
    color: #888;
    margin: 0 20px;
  }
`;

export const Content = styled.div`
  height: 58px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    border-right: 1px solid #eee;
    padding-right: 20px;

    img {
      max-width: 40px;
      max-height: 40px;

      margin-right: 10px;
    }

    a {
      font-weight: bold;
      color: #ee4d64;
    }
  }
`;

import logo from '../assets/money.jpg';
export default function Header(){
    return(
        <header id="header">
          <img src={logo} alt="logo of money" />
          <h1>Investment Calculator</h1>
        </header>

    );
}
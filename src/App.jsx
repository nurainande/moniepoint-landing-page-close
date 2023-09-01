import { useState } from "react"
import { Button } from "./Button";
import { logo } from "./assets";
import { footer } from "./assets";
import { data,brand,info } from "./data";
// import Testimonial from "./Testimonial/testimonial";

function App() {
  const [state,setState] = useState(false);
  const [navState, setNavState] = useState(true);
  const [sign,setSign] = useState(1);
  return (
    <div className="App">
      <Header/>
      <SignModal/>

      <Home/>

      <Products/>

      <Services/>

      <Brands/>

      <Footer/>

    </div>
  );


 function Header() {
     return (
       <header className="header">
         <img src={logo} alt="asset" className="logo" />

         <nav className="navbar">
           <ul className={navState?'lists':'lists show'}>
             <li className="item">
               <a>Company</a>&rarr;
             </li>
             {/*  */}
             <li className="item">
               <a>Booking</a>
             </li>
             {/*  */}
             <li className="item">
               <a>Loan</a>
             </li>
             {/*  */}
             <li className="item">
               <a>Contact</a>
             </li>
           <Button
             color="#0361f0"
             onClick={() => {
               setState(!state);
               setSign(1);
             }}
           >
             {state ? <p>close</p> : <p>Sign in</p>}
           </Button>
           </ul>
           <div>
             <span className="tog" style={{marginRight:'.5rem'}} onClick={()=>setNavState(navState=>!navState)}>{navState?'open':'close'}</span>
             <span>NG &rarr;</span>
           </div>
         </nav>
       </header>
     );
  }

  function Home() {
    return <section className="home">
      <div className="home-box">
        <div className="award">
          <p>National Award By CBN Nigeria</p>
        </div>
        <h1>Simple Solution To Power Your Business</h1>
        <h2>
          Collect payments,access loans and other financial services with our
          solution at your best convinience
        </h2>
        <Button
          onClick={() => {
            setState(!state);
            setSign(2);
          } }
        >
          Open an account
        </Button>
      </div>
    </section>;
  }

  function SignModal() {
    return (
      <div className={state ? "form-con active" : "form-con"}>
        <form className="form">
          <div className="sign-title">
            <span
              className={sign === 1 ? "sign-in act" : "sign-in"}
              onClick={() => setSign(1)}
            >
              Sign In
            </span>
            <span
              className={sign === 2 ? "sign-up act" : "sign-up"}
              onClick={() => setSign(2)}
            >
              Sign Up
            </span>
            <span onClick={() => setState((state) => !state)}>close</span>
          </div>
          <div className="details">
            <form className={sign === 1 ? "sign active-sign" : "sign"}>
              <h1 className="form-head">Login to Moniepoint</h1>
              <div
                className="inpu-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <Button>Login</Button>
                <p className="forgot">
                  Forgot Username <span>or </span>Password
                </p>
              </div>
            </form>
            {/* <form className={sign === 2 ? "sign active-sign" : "sign"}>
          <h1 className="form-head">Register an Account</h1>
        </form> */}
            <form className={sign === 2 ? "sign active-sign" : "sign"}>
              <h1 className="form-head">Create an Account</h1>
              <div
                className="inpu-box"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <input type="text" placeholder="Firstname" />
                  <input type="text" placeholder="Lastname" />
                </div>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <Button>Register</Button>
              </div>
            </form>
          </div>
        </form>
      </div>
    );
  }

  function Products(){
    return (
      <section className="product section">
        <h1>All the tools you need to run your business with ease</h1>
        <div className="grid">
          {data.map((dat) => {
            return (
              <div key={dat.id} className="each">
                <img src={dat.image} alt="" />
                <h3>{dat.title}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  function Services(){
    return (
      <section className="services section">
        <div className="info">
          <h2>A free bank account to power your business</h2>
          <div className="info-list">
            {info.map((inf, i) => {
              return (
                <p key={i} className="inf">
                  {inf}
                </p>
              );
            })}
          </div>
          <Button>Get on board</Button>
        </div>
        <img
          src="https://moniepoint.com/static/b20ba41a5f412ca6702120da06483aa9/a39c6/slide-3.webp"
          alt=""
        />
      </section>
    );
  }

  function Brands() {
    return <section className="brands section">
      <h1>
        Join 600,000+ successful business owners who trust Moniepoint for all
        their business needs.
      </h1>
      <div className="grid">
        {brand.map((dat) => {
          return (
            <div key={dat.id} className="each">
              <img src={dat.image} alt="" />
              <h3>{dat.title}</h3>
            </div>
          );
        })}
      </div>
    </section>;
  }
}

function Footer(){
  return (
    <footer className="footer section">
      <div className="upper">
        <div className="box1">
          <h1>Contact Us</h1>
          <card className="children">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </card>
        </div>

        <div className="box1">
          <h1>Company</h1>
          <card className="children">
            <p>About Us</p>
            <p>Join the team</p>
            <p>Contact Us</p>
          </card>
        </div>

        <div className="box1">
          <h1>Our Products</h1>
          <card className="children">
            <p>Business account</p>
            <p>Pos terminal</p>
            <p>Expense card</p>
            <p>Payment gateway</p>
          </card>
        </div>

        <div className="box1">
          <h1>Resources</h1>
          <card className="children">
            <p>Help center</p>
            <p>Learning center</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </card>
        </div>
      </div>
      <div className="lower" style={{display:'flex',gap:'5rem'}}>
        <img src={footer} alt="" className="logo" />

        <span>
          Moniepoint Microfinance Bank Limited is authorised and regulated by
          the Central Bank of Nigeria to offer banking services. Deposits are
          insured by the Nigerian Deposit Insurance Corporation (NDIC)
        </span>
      </div>
    </footer>
  );
}

export default App;


import './App.css';

function App() {
  return (
    <div className="App">
    
       {/* free card */}
       <div className="card">
        <h5 className="header">FREE</h5>
        <h6 className="font">$0
          <span>/month</span>
        </h6>
        <hr />
        <ul>
          <li>
            <span>✔️</span>
            Single User</li>
          <li>
            <span>✔️</span>
            5GB Storage
            </li>
          <li>
            <span>✔️</span>
            Unlimited Public Projects
            </li>
          <li>
            <span>✔️</span>
            Community Access
            </li>
          <li>
            <span>❌</span>
            Unlimited Private Projects
            </li>
          <li>
            <span>❌</span>
            Dedicated Phone Support
            </li>
          <li>
            <span>❌</span>
            Free Subdomain
            </li>
          <li>
            <span>❌</span>
            Monthly Status Reports
            </li>
        </ul>
        <div>
        <a href="#" class="btn">Button</a>
        </div>
        </div>
    {/* plus card */}
    <div className="card">
        <h5 className="header">PLUS</h5>
        <h6 className="font">$9
          <span>/month</span>
        </h6>
        <hr />
        <ul>
          <li>
            <span>✔️</span>
            <b>5 Users</b>
            </li>
          <li>
            <span>✔️</span>
            50GB Storage
            </li>
          <li>
            <span>✔️</span>
            Unlimited Public Projects
            </li>
          <li>
            <span>✔️</span>
            Community Access
            </li>
          <li>
            <span>✔️</span>
            Unlimited Private Projects
            </li>
          <li>
            <span>✔️</span>
            Dedicated Phone Support
            </li>
          <li>
            <span>✔️</span>
            Free Subdomain
            </li>
          <li>
            <span>❌</span>
            Monthly Status Reports
            </li>
        </ul>
        <div>
        <a href="#" class="btn">Button</a>
        </div>
        </div>
    {/* pro card */}
    <div className="card">
        <h5 className="header">PRO</h5>
        <h6 className="font">$49
          <span>/month</span>
        </h6>
        <hr />
        <ul>
          <li>
            <span>✔️</span>
            <b>Unlimited Users</b>
            </li>
          <li>
            <span>✔️</span>
            150GB Storage
            </li>
          <li>
            <span>✔️</span>
            Unlimited Public Projects
            </li>
          <li>
            <span>✔️</span>
            Community Access
            </li>
          <li>
            <span>✔️</span>
            Unlimited Private Projects
            </li>
          <li>
            <span>✔️</span>
            Dedicated Phone Support
            </li>
          <li>
            <span>✔️</span>
            <b>Unlimited</b> Free Subdomains
            </li>
          <li>
            <span>✔️</span>
            Monthly Status Reports
            </li>
        </ul>
        <div>
        <a href="#" class="btn">Button</a>
        </div>
        </div>
  
    
    </div>
  );
}  
export default App;

// function Listed () {
//   return (
//     <div className="card">
//       <h5>title</h5>
//       <h6>price</h6>
//       <li>plans</li>
//     </div>
//   )
// }

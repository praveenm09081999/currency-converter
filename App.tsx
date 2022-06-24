import * as React from 'react';
import './style.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rateObj: {} };
  }
  componentDidMount() {
    fetch(
      'https://openexchangerates.org/api/latest.json?app_id=7e77ecd095ff445fa8ef246409981c73'
    )
      .then((res) => res.json())
      .then((res) => this.setState({ rateObj: res.rates }));
    this.setState({ usdRate: 1, eurRate: 100 });
  }

  render() {
    return (
      <div>
        <br></br>
        {Object.keys(this.state.rateObj).length > 0
          ? Object.keys(this.state.rateObj).map((obj) => (
              <p key={obj}>
                {obj +
                  ':₹' +
                  1 / (this.state.rateObj[obj] / this.state.rateObj['INR'])}
              </p>
            ))
          : 'GETTING DATA'}
      </div>
    );
  }
}
export default App;

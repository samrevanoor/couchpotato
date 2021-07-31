import { React, Component } from "react";
import "../GeneratorForm/GeneratorForm.css";

const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
console.log(range(currentYear, currentYear - 50, -1)); 

class GeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      year: "",
      performers: [],
      director: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //   handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await userService.signup(this.state);
  //       this.props.handleSignupOrLogin();
  //       this.props.history.push('/');
  //     } catch (err) {
  //       this.props.updateMessage(err.message);
  //     }
  //   }

  render() {
    return (
      <div className="GeneratorForm-body">
        <form>
          {/* onSubmit={this.handleSubmit}> */}
          <div>
            <div>
              <label>genre </label>
              <select name="genre" onChange={this.handleChange}>
                  <option value="comedy">comedy</option>
                  <option value="romance">romance</option>
                  <option value="drama">drama</option>
                  <option value="action">action</option>
                  <option value="fantasy">fantasy</option>
                  <option value="horror">horror</option>
                  <option value="documentary">documentary</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>year </label>
              <input
                type="number"
                value={this.state.year}
                name="year"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>performers </label>
              <input
                type="text"
                placeholder="separate with commas"
                value={this.state.performers}
                name="performers"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <label>director </label>
              <input
                type="text"
                value={this.state.director}
                name="director"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div className="col-sm-12 text-center">
              <button className="btn btn-default GeneratorForm-button">
                {" "}
                generate!
              </button>
              &nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneratorForm;

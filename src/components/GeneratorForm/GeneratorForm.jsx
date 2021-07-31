import { React, Component } from "react";
import "../GeneratorForm/GeneratorForm.css";

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
  render() {
    return (
      <div className="GeneratorForm-body">
        <form>
          {/* onSubmit={this.handleSubmit}> */}
          <div>
            <div>
              <label>genre </label>
              <input
                type="text"
                value={this.state.genre}
                genre="genre"
                //   onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
            <label>year </label>
              <input
                type="text"
                value={this.state.year}
                name="year"
                //   onChange={this.handleChange}
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
                //   onChange={this.handleChange}
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
                //   onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
          <div className="col-sm-12 text-center">
              <button className="btn btn-default GeneratorForm-button">
                {/* disabled={this.isFormInvalid()}> */}
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

import { Component } from "react";
import Link from "next/link";
class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h4 className="text-center">
                <strong>Contact</strong>
              </h4>
            </div>
          </div>
          <div className="row justify-content-center mb-2">
            <div className="col-sm-10">
              <form className="contact-form-border p-4">
                <div className="form-row">
                  <div className="col-12 form-group">
                    <h5>Send Us a Message</h5>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-6 form-group">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <textarea
                      className="form-control"
                      rows="10"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12 form-group">
                    <center>
                      <button type="submit" className="btn btn-primary px-5">
                        Send Message
                      </button>
                    </center>
                  </div>
                </div>
              </form>
              <center>
                <Link href="/">
                  <a className="home-link">BACK HOME</a>
                </Link>
              </center>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <center>Powered by:</center>
            <div className="row justify-content-center">
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <a href="http://mobilewebghana.org/" target="_blank">
                    <img
                      src="../static/img/partners/mwg.png"
                      className="partner"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.osmghana.org/" target="_blank">
                    <img
                      src="../static/img/partners/osmghana.png"
                      className="partner"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.hotosm.org/" target="_blank">
                    <img
                      src="../static/img/partners/hot.png"
                      className="partner"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;

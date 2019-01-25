import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { Marker } from "react-map-gl";
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63689,
        longitude: -0.23602,
        zoom: 12,

        pitch: 60,
        opacity: 1
      }
    };
  }

  render() {
    return (
      <div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-sm-3" style={{ marginTop: "0.8em" }}>
              <center>
                <Link href="/">
                  <a className="home-link">HOME</a>
                </Link>
              </center>
            </div>
            <div className="col-sm-9">
              <h2 className="font-weight-bold text-center">BUILDINGS</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              <ul className="list-unstyled rounded bg-sidebar shadow">
                <div
                  className="btn-group btn-group-lg w-100 rounded"
                  role="group"
                >
                  <Link href="/buildings">
                    <a className="btn btn-active">Buildings</a>
                  </Link>
                  <Link href="/flood-history">
                    <a className="btn btn-n1">Food History</a>
                  </Link>
                  <Link href="/drainage">
                    <a className="btn btn-n2">Drainage</a>
                  </Link>
                </div>

                <div className="py-2 px-2">
                  <div className="map-border my-3" style={{ height: "400px" }}>
                    Summary chart and legends here
                  </div>
                  <center>
                    <select className="form-control mb-3 text-center rounded">
                      <option>-- Select to Download --</option>
                      <option>All Buildings</option>
                      <option>All Data</option>
                    </select>
                  </center>
                </div>
              </ul>
              <center>
                <Link href="/contact">
                  <a className="btn btn-dark px-10">Contact</a>
                </Link>
              </center>
            </div>
            <div className="col-sm-7">
              <div className="map-border" style={{ height: "600px" }}>
                <ReactMapGL
                  mapboxApiAccessToken={
                    "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
                  }
                  {...this.state.viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  onViewportChange={viewport => this.setState({ viewport })}
                >
                  {" "}
                  <Marker latitude="5.53689" longitude="-0.21602">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63799" longitude="-0.23602">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63749" longitude="-0.23602">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.61499" longitude="-0.25607">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63719" longitude="-0.26662">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.69749" longitude="-0.23912">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63749" longitude="-0.23612">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                  <Marker latitude="5.63599" longitude="-0.23603">
                    <img
                      src="https://img.icons8.com/color/48/000000/marker.png"
                      width="10"
                      height="10"
                    />
                  </Marker>
                </ReactMapGL>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <center>Powered by:</center>
            <div className="row justify-content-center">
              <ul className="list-inline py-2">
                <li className="list-inline-item">
                  <Link href="http://mobilewebghana.org/">
                    <a target="_blank">
                      <img
                        src="../static/img/partners/mwg.png"
                        className="partner"
                      />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://www.osmghana.org/">
                    <a target="_blank">
                      <img
                        src="../static/img/partners/osmghana.png"
                        className="partner"
                      />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="https://www.hotosm.org/">
                    <a target="_blank">
                      <img
                        src="../static/img/partners/hot.png"
                        className="partner"
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Buildings;

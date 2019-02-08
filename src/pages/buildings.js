import { Component } from "react";
import Link from "next/link";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
//import {Config} from "../../config/config"
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "20px"
};
import fetch from "isomorphic-unfetch";
const base_url = "http://localhost:5000" || "https://ocav1-app.herokuapp.com";
class Buildings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "inherit",
        height: "inherit",
        latitude: 5.63689,
        longitude: -0.23602,
        zoom: 15.6
      },
      popupInfo: null,
      placeInfo: null
    };
    this.renderPopup = this.renderPopup.bind(this);
  }

  static async getInitialProps() {
    const buildingsRes = await fetch(base_url + "/static/data/derrick.json");
    const buildingData = await buildingsRes.json();
    // console.log(InduestryData);
    return { buildingData };
  }

  renderPopup() {
    console.log(this.state.placeInfo);
    return (
      this.state.popupInfo && (
        <Popup
          tipSize={10}
          anchor="bottom-right"
          longitude={this.state.popupInfo.state.longitude}
          latitude={this.state.popupInfo.state.latitude}
          onClose={() => this.setState({ popupInfo: null })}
          closeOnClick={true}
        >
          <table width="300">
            <tbody>
              <tr>
                <th>Community</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.community}
                </td>
              </tr>
              <tr>
                <th tyle={{ width: "80px" }}>Building material</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.building_material}
                </td>
              </tr>
              <tr>
                <th>Roof material</th>
                <td style={{ paddingLeft: "5px" }}>
                  {this.state.placeInfo.roof_material}
                </td>
              </tr>
            </tbody>
          </table>
        </Popup>
      )
    );
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
            <div className="col-sm-4">
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
            <div className="col-sm-8">
              <div className="map-border" style={{ height: "750px" }}>
                <ReactMapGL
                  mapboxApiAccessToken={
                    "pk.eyJ1Ijoid2lzZG9tMDA2MyIsImEiOiJjanI1aWg0cGQwZTByM3dtc3J1OHJ3MGNqIn0.yjtKpgtEmgCkCcLvpH_tJg"
                  }
                  {...this.state.viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v9"
                  onViewportChange={viewport => this.setState({ viewport })}
                >
                  {this.props.buildingData.features.map(value => {
                    return value.geometry.coordinates.map((val, index) => {
                      return (
                        <Marker
                          latitude={val[index][1]}
                          longitude={val[index][0]}
                          key={index}
                        >
                          <img
                            src="../static/img/home.png"
                            width="20"
                            height="20"
                            onClick={() => {
                              console.log("hhhheheheheh");
                              this.setState({
                                popupInfo: {
                                  state: {
                                    longitude: val[index][0],
                                    latitude: val[index][1]
                                  }
                                },
                                placeInfo: {
                                  community: value.properties["addr:community"],
                                  building_material:
                                    value.properties["building:material"] ||
                                    null,
                                  roof_material:
                                    value.properties["roof:material"] || null
                                }
                              });
                            }}
                          />
                        </Marker>
                      );
                    });
                  })}

                  <div className="nav" style={navStyle}>
                    <NavigationControl
                      onViewportChange={viewport => this.setState({ viewport })}
                    />
                  </div>
                  {this.renderPopup()}
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

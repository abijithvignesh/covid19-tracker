import logo from "./logo.svg";
import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountyPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log("ddata", fetchedData);
  }
  render() {
    const { data } = this.state;
    return (
      <>
      <h1>Covid Tracker</h1>
      <div className={styles.container}>
        
        <br></br>
        <Cards data={data}></Cards>
        {/* <CountyPicker></CountyPicker> */}
        <Charts></Charts>
      </div>
      </>
    );
  }
}

export default App;

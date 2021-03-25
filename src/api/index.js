import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    const modifiedData = {
      confirmed: response.data.confirmed,
      recovered: response.data.recovered,
      deaths: response.data.deaths,
      lastUpdate: response.data.lastUpdate,
    };
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((data) => ({
      confirmed: data.confirmed.total,
      deaths: data.deaths.total,
      date:data.reportDate,
    }));
    return modifiedData; 
  } catch (error) {}
};

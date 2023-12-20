import axios from "axios";
import { useState, useEffect, createContext } from "react";
import GarageMechanical from "../pages/GarageMechanical";
import AdminPage from "../pages/Adminpage";
export const UserContext = createContext(null);

function Database() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://65572bb0bd4bcef8b6122d2f.mockapi.io/GARAGEDATA"
        );
        setuser(response.data);
        console.log("Data fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  const uservaliue = { user };

  return (
    <UserContext.Provider value={uservaliue}>
     <GarageMechanical></GarageMechanical>
    </UserContext.Provider>
  );
}

export default Database;

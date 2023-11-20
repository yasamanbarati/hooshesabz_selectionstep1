import axios from "axios";

export const fetchData = async () => {
  try {
    const response = await axios
      .get<string>("http://shserver.top:8080/test/users/getData")
      .then((res) => res.data);
    return response;
  } catch (error) {
    console.error("Error fetching API:", error);
    return "";
  }
};

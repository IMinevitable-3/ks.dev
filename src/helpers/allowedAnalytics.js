import { useNavigate } from "react-router-dom";
import axios from "axios";

export const allowedAnalytics = [
  "about",
  "projects",
  "my-github",
  "location",
  "mail",
  "propeers",
  "picknpin",
  "my-cv",
  "home",
];

const sendAnalyticsSignal = async (eventName) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/send-signal`,
      { event: eventName }
    );
    console.log("sent", eventName);
    return response.data;
  } catch (error) {
    console.error("Error sending analytics signal:", error);
    throw error;
  }
};

export const useAnalyticsLink = () => {
  const navigate = useNavigate();

  const handleLinkClick = async (eventName, event, path) => {
    event.preventDefault();
    console.log(eventName, path);
    try {
      await sendAnalyticsSignal(eventName);
      console.log("Analytics signal sent successfully");
      navigate(path);
    } catch (error) {
      console.error("Failed to send analytics signal:", error);
    }
  };

  return handleLinkClick;
};

export default sendAnalyticsSignal;

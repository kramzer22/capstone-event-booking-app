const yearBuilder = () => {
  return Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
};
const monthBuilder = (dateType) => {
  try {
    if (!dateType) {
      dateType = "MMM";
    }

    if (dateType === "MMM") {
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    } else {
      throw new Error("invalidDateFormatError");
    }
  } catch (error) {
    throw error;
  }
};

const dayBuilder = (month, year = "") => {
  if (month === "Feb") {
    if (year === "") {
      return Array.from({ length: 29 }, (_, i) => i + 1);
    } else {
      if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return Array.from({ length: 29 }, (_, i) => i + 1);
      } else {
        return Array.from({ length: 28 }, (_, i) => i + 1);
      }
    }
  } else if (
    month === "Apr" ||
    month === "Jun" ||
    month === "Sep" ||
    month === "Nov"
  ) {
    return Array.from({ length: 30 }, (_, i) => i + 1);
  } else {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  }
};

const createCookie = (cookie) => {
  document.cookie = `${cookie.name}=${cookie.value}`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }

  return null;
};

export default {
  yearBuilder,
  monthBuilder,
  dayBuilder,
  createCookie,
  getCookie,
};

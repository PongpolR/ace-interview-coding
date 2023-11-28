import { ref } from "vue";

const getUpcomingLaunches = () => {
  const launchesUpcoming = ref(null);
  const errorUpcoming = ref(null);

  const loadUpcoming = async () => {
    try {
      let data = await fetch("https://api.spacexdata.com/v4/launches/upcoming");
      if (!data.ok) {
        throw Error("no data");
      }
      launchesUpcoming.value = await data.json();
    } catch (err) {
      errorUpcoming.value = err.message;
      console.log(errorUpcoming.value);
    }
  };
  return { launchesUpcoming, errorUpcoming, loadUpcoming };
};

export default getUpcomingLaunches;

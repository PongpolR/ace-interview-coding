import { ref } from "vue";

const getPastLaunches = () => {
  const launchesPast = ref(null);
  const errorPast = ref(null);

  const loadPast = async () => {
    try {
      let data = await fetch("https://api.spacexdata.com/v4/launches/past");
      if (!data.ok) {
        throw Error("no data");
      }
      launchesPast.value = await data.json();
    } catch (err) {
      errorPast.value = err.message;
      console.log(errorPast.value);
    }
  };
  return { launchesPast, errorPast, loadPast };
};

export default getPastLaunches;

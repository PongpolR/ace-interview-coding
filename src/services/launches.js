import { ref } from "vue";

const getAllLaunches = () => {
  const launches = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("https://api.spacexdata.com/v4/launches");
      if (!data.ok) {
        throw Error("no data");
      }
      launches.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { launches, error, load };
};

export default getAllLaunches;

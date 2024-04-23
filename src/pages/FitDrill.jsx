import { lazy } from "react";

const SearchExercise = lazy(()=>import('../components/FitDrillComponents/SearchExercise'))


const FitDrill = () => {
return(
  <div className="">
  <SearchExercise/>
  </div>
)
};

export default FitDrill;

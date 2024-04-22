import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout";
const Home = lazy(() => import("./pages/Home"));
const FitCalc = lazy(() => import("./pages/FitCalc"));
const FitDrill = lazy(() => import("./pages/FitDrill"));
const FitInfos = lazy(() => import("./pages/FitInfos"));
const Bmi = lazy(() => import("./components/FitCalcComponents/Bmi"));
const Bmr = lazy(() => import("./components/FitCalcComponents/Bmr"));
const Ibw = lazy(() => import("./components/FitCalcComponents/Ibw"));
const Tdee = lazy(()=>import('./components/FitCalcComponents/Tdee'))
const BodyFat = lazy(()=>import('./components/FitCalcComponents/BodyFat'))
const Macros = lazy(()=>import('./components/FitCalcComponents/Macros'))

function App() {
  return (
    <div className="bg-[#FAF9F6]">
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fitcalc" element={<FitCalc />}>
            <Route path="bmi" element={<Bmi/>}/>
            <Route path="bmr" element={<Bmr/>}/>
            <Route path="ibw" element={<Ibw/>}/>
            <Route path="tdee" element={<Tdee/>}/>
            <Route path="bodyfat" element={<BodyFat/>}/>
            <Route path="macros" element={<Macros/>}/>
            </Route>
            <Route path="fitdrill" element={<FitDrill />} />
            <Route path="fitinfos" element={<FitInfos />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

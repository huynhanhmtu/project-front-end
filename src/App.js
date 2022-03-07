import { BrowserRouter, Route, Switch } from "react-router-dom";
import { renderRoutesAdmin, renderRoutesHome, renderRoutesUser } from "routes";
import { Suspense } from "react";
import Loader from "components/Loader";
import PageNotFound from "containers/PageNotFound";

function App() {
  return (
    // <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesUser()}
        {renderRoutesAdmin()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
    // </Suspense>
  );
};

export default App;

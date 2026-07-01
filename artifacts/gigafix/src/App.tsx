import { Switch, Route, Router as WouterRouter } from "wouter";
import LandingPage from "@/pages/LandingPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import ProfessionalOnboarding from "@/pages/ProfessionalOnboarding";
import CustomerDashboard from "@/pages/CustomerDashboard";
import ProDashboard from "@/pages/ProDashboard";
import ProSchedule from "@/pages/ProSchedule";
import ProJobFeed from "@/pages/ProJobFeed";
import ProReviews from "@/pages/ProReviews";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/for-professionals" component={ProfessionalOnboarding} />
      <Route path="/dashboard" component={CustomerDashboard} />
      <Route path="/welcome" component={CustomerDashboard} />
      <Route path="/pro-dashboard" component={ProDashboard} />
      <Route path="/pro/schedule" component={ProSchedule} />
      <Route path="/pro/jobs" component={ProJobFeed} />
      <Route path="/pro/reviews" component={ProReviews} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;

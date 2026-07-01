import { Switch, Route, Router as WouterRouter } from "wouter";
import LandingPage from "@/pages/LandingPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import ProfessionalOnboarding from "@/pages/ProfessionalOnboarding";
import CustomerDashboard from "@/pages/CustomerDashboard";
import CustomerFindServices from "@/pages/CustomerFindServices";
import CustomerBookings from "@/pages/CustomerBookings";
import CustomerChats from "@/pages/CustomerChats";
import CustomerMyJob from "@/pages/CustomerMyJob";
import CustomerPayments from "@/pages/CustomerPayments";
import CustomerProfile from "@/pages/CustomerProfile";
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
      {/* Customer routes */}
      <Route path="/dashboard" component={CustomerDashboard} />
      <Route path="/welcome" component={CustomerDashboard} />
      <Route path="/customer/services" component={CustomerFindServices} />
      <Route path="/customer/bookings" component={CustomerBookings} />
      <Route path="/customer/chats" component={CustomerChats} />
      <Route path="/customer/jobs" component={CustomerMyJob} />
      <Route path="/customer/payments" component={CustomerPayments} />
      <Route path="/customer/profile" component={CustomerProfile} />
      {/* Professional routes */}
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

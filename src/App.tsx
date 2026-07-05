import { Switch, Route, Router as WouterRouter } from "wouter";
import LandingPage from "@/pages/general/LandingPage";
import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import ProfessionalOnboarding from "@/pages/pro/ProfessionalOnboarding";
import ForProfessionalsPage from "@/pages/general/ForProfessionals";
import HowItWorksPage from "@/pages/general/How-it-Works";
import FindServicesPage from "@/pages/general/FindServices";
import CustomerDashboard from "@/pages/customer/CustomerDashboard";
import CustomerFindServices from "@/pages/customer/CustomerFindServices";
import CustomerBookings from "@/pages/customer/CustomerBookings";
import CustomerChats from "@/pages/customer/CustomerChats";
import CustomerMyJob from "@/pages/customer/CustomerMyJob";
import CustomerPayments from "@/pages/customer/CustomerPayments";
import CustomerProfile from "@/pages/customer/CustomerProfile";
import ProDashboard from "@/pages/pro/ProDashboard";
import ProSchedule from "@/pages/pro/ProSchedule";
import ProJobFeed from "@/pages/pro/ProJobFeed";
import ProChats from "@/pages/pro/ProChats";
import ProEarnings from "@/pages/pro/ProEarnings";
import ProReviews from "@/pages/pro/ProReviews";
import NotFound from "@/pages/general/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      {/* Public pages */}
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/find-services" component={FindServicesPage} />
      <Route path="/for-professionals" component={ForProfessionalsPage} />
      <Route path="/pro-onboarding" component={ProfessionalOnboarding} />
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
      <Route path="/pro/chats" component={ProChats} />
      <Route path="/pro/earnings" component={ProEarnings} />
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

import React from "react";
import "./variable/variable.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import TabCardImage1 from "./images/tabcardimg1.png";
import GuestStarter from "./components/GuestStarter/GuestStarter";
import GuestHeader from "./components/GuestHeader/GuestHeader";
// import BuyerNav from "./components/BuyerNavbar/BuyerNavbar";
import GuestMainHome from "./pages/GuestHome/GuestHome";
import BuyerHomeMainPage from "./pages/BuyerHomeMainPage/BuyerHomeMainPage";
import SubmitRequestPage from "./pages/SubmitRequestPage/SubmitRequestPage";
import CheckPostedJobPage from "./pages/CheckPostedJobPage/CheckPostedJobPage";
import TalentProposalPage from "./pages/TalentProposalPage/TalentProposalPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import OrderInfromationPage from "./pages/OrderInformationPage/OrderInfromationPage";
import PreferencesPage from "./pages/PreferencesPage/PreferencesPage";
import PreferencesListPage from "./pages/PreferencesListPage/PreferencesListPage";
import BuyerChatPage from "./pages/BuyerChatPage/BuyerChatPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import GuidancePage from "./pages/GuidancePage/GuidancePage";
import ProgrammingServicesPage from "./pages/ProgrammingServicesPage/ProgrammingServicesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import OrderPlacementDetailPage from "./pages/OrderPlacementDetailPage/OrderPlacementDetailPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import OrderRequirementPage from "./pages/OrderRequirementPage/OrderRequirementPage";
import TalentAboutPage from "./pages/TalentAboutPage/TalentAboutPage";
// test routes
import MyNav from "./components/MyNav/Navbar";
import SideNav from "./components/SideNav/Sidebar";
import ToolTip from "./components/ToolTip/ToolTip";
import GuestHomeSearch from "./components/GuestHomeSearch/GuestHomeSearch";
import GuestOptions from "./components/GuestOptions/GuestOptions";
import FullNav from "./components/FullNavBar/FullNav";
import Slider from "./components/Slider/Index";
import ServicesCard from "./components/ServicesCard/ServicesCard";
import MultiItemCarousel from "./components/ServicesCard/MultiItemCrousel";
import ProfessionalServicesCard from "./components/ProfessionalServicesCard/ProfessionalServicesCard";
import ServicesCardComponent from "./components/ServicesCardComponent/ServicesCardComponent";
import Footer from "./components/Footer/Footer";
import BuyerFooter from "./components/BuyerFooter/BuyerFooter";
import UltimateServices from "./components/UltimateServices/UltimateServices";
import GuestHome from "./components/GuestHome/GuestHome";
import LanguagePopUp from "./components/LanguagePopUp/LanguagePopUp";
import BuyerTab from "./components/BuyerTab/BuyerTabs";
import TabCard from "./components/BuyerTab/TabCard";
import StepsProgressBar from "./components/StepsProgressBar/StepsProgressBar";
import TalentAboutMeCard from "./components/TalentAboutMeCard/TalentAboutMeCard";
import AboutMeCarousel from "./components/AboutMeCarousel/AboutMeCarousel";
import CompletedOrderInformationPage from "./pages/CompletedOrderInformationPage/CompletedOrderInformationPage";
import ServiceDeliveryPage from "./pages/ServiceDeliveryPage/ServiceDeliveryPage";
import ReviewComponent from "./components/ReviewComponent/ReviewComponent";
import BuyerReviewPage from "./pages/BuyerReviewPage/BuyerReviewPage";
import SelectOfferPopUP from "./TalentComponents/SelectOfferPopUP/SelectOfferPopUP";

// import Footer from "./components/Footer/Footer";
// import SuggestedServices from "./components/SuggestedServices/SuggestedServices";

// import ProfileToolTip from "./components/ProfileToolTip/ProfileToolTip";
//////////

// ****************** Talent Section ***************************************

import AccountSecurityPage from "./TalentPages/AccountSecurityPage/AccountSecurityPage";
import TalentBtn from "./TalentComponents/TalentBtn/TalentBtn";
import ReviewasBuyerPage from "./pages/ReviewasBuyerPage/ReviewasBuyerPage";
import BuyerProfilesListPage from "./pages/BuyerProfilesListPage/BuyerProfilesListPage";
import TalentServiceDeliveryPage from "./TalentPages/TalentServiceDeliveryPage/TalentServiceDeliveryPage";
import TalentChatPage from "./TalentPages/TalentChatPage/TalentChatPage";
import SelectPaymentPopUp from "./TalentComponents/SelectPaymentPopUp/SelectPaymentPopUp";
import CustomOffer from "./TalentComponents/CustomOffer/CustomOffer";
import BuyerProfilePage from "./TalentPages/BuyerProfilePage/BuyerProfilePage";
import PostedJobPage from "./TalentPages/PostedJobPage/PostedJobPage";
import BuyerRequestPage from "./TalentPages/BuyerRequestPage/BuyerRequestPage";
import TalentAccountSectionPage from "./TalentPages/TalentAccountSectionPage/TalentAccountSectionPage";
import ManageAccountSectionPage from "./TalentPages/ManageAccountSectionPage/ManageAccountSectionPage";
import ManageGigsSectionPage from "./TalentPages/ManageGigsSectionPage/ManageGigsSectionPage";
import BecomeSellerBar from "./TalentComponents/BecomeSellerBar/BecomeSellerBar";
import BecomeSellerGuidePage from "./TalentPages/BecomeSellerGuidePage/BecomeSellerGuidePage";
import BecomeSellerStepOne from "./TalentComponents/BecomeSellerStepOne/BecomeSellerStepOne";
import BecomeSellerStepTwo from "./TalentComponents/BecomeSellerStepTwo/BecomeSellerStepTwo";
import BecomeSellerStepThree from "./TalentComponents/BecomeSellerStepThree/BecomeSellerStepThree";
import BecomeSellerStepFour from "./TalentComponents/BecomeSellerStepFour/BecomeSellerStepFour";
import BecomeSellerStepFive from "./TalentComponents/BecomeSellerStepFive/BecomeSellerStepFive";
import TalentHomePage from "./TalentPages/TalentHomePage/TalentHomePage";
import TalentGigInfoPage from "./TalentPages/TalentGigInfoPage/TalentGigInfoPage";
import TalentGigOrderInfoPage from "./TalentPages/TalentGigOrderInfoPage/TalentGigOrderInfoPage";
import TalentGigEarningInfoPage from "./TalentPages/TalentGigEarningInfoPage/TalentGigEarningInfoPage";
import TalentAddNewGigPage from "./TalentPages/TalentAddNewGigPage/TalentAddNewGigPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import TalentEarningPage from "./TalentPages/TalentEarningPage/TalentEarningPage";
import StripePaymentPage from "./pages/StripePaymentPages/StripePaymentPage";
import Success from "./components/StripePaymnetComponents/Success";
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<GuestStarter />} />
            {/* <Route path='/nav' element={<GuestHeader />} /> */}
            <Route path="/guesthome" element={<GuestMainHome />} />
            <Route path="/buyerhome" element={<BuyerHomeMainPage />} />
            <Route path="/submitrequest" element={<SubmitRequestPage />} />
            <Route path="/postjob" element={<CheckPostedJobPage />} />
            <Route path="/checkjobproposal" element={<TalentProposalPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/buyerorders" element={<OrderPage />} />
            <Route path="/service-delivery" element={<ServiceDeliveryPage />} />
            <Route path="/orderdetails" element={<OrderInfromationPage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/preferences-list" element={<PreferencesListPage />} />
            <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
            <Route path="/guidancepage" element={<GuidancePage />} />
            <Route
              path="/order-placement-detail"
              element={<OrderPlacementDetailPage />}
            />
            <Route path="/payment-page" element={<PaymentPage />} />
            <Route
              path="/order-requirements"
              element={<OrderRequirementPage />}
            />
            <Route path="/talent-about" element={<TalentAboutPage />} />
            <Route
              path="/programmingservices"
              element={<ProgrammingServicesPage />}
            />
            <Route path="/buyer-review" element={<BuyerReviewPage />} />

            <Route
              path="/completed-order-info"
              element={<CompletedOrderInformationPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            {/* check this one */}
            <Route path="/chat" element={<BuyerChatPage />} />
            <Route path="/nav" element={<GuestHeader />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* <Route path="/buyernav" element={<BuyerNav />} /> */}
            {/* test Routes........ */}

            <Route path="/TalentBtn" element={<TalentBtn />} />
            <Route path="/mynav" element={<MyNav />} />
            <Route path="/sidenav" element={<SideNav />} />
            <Route path="/tooltip" element={<ToolTip />} />
            <Route path="/protooltip" element={<ToolTip />} />
            <Route path="/guesthomesearch" element={<GuestHomeSearch />} />
            <Route path="/guestoptions" element={<GuestOptions />} />
            <Route path="/fullnav" element={<FullNav />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/servicescard" element={<ServicesCard />} />
            <Route path="/caro1" element={<MultiItemCarousel />} />
            <Route path="/pro" element={<ProfessionalServicesCard />} />
            <Route path="/sc" element={<ServicesCardComponent />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/bfooter" element={<BuyerFooter />} />
            <Route path="/ultimateservices" element={<UltimateServices />} />
            <Route path="/guest" element={<GuestHome />} />
            <Route path="/languagepopup" element={<LanguagePopUp />} />
            <Route path="/buyertab" element={<BuyerTab />} />
            <Route path="/stepsprogress" element={<StepsProgressBar />} />
            <Route path="/talent-about-card" element={<TalentAboutMeCard />} />
            <Route path="/aboutmecarousel" element={<AboutMeCarousel />} />
            <Route path="/ReviewComponent" element={<ReviewComponent />} />
            <Route path="/SelectPaymentPopUp" element={<SelectPaymentPopUp />} />
            <Route path="/SelectOfferPopUP" element={<SelectOfferPopUP />} />
            <Route path="/CustomOffer" element={<CustomOffer />} />
            <Route path="/sellerbar" element={<BecomeSellerBar />} />

            <Route
              path="/tabcard"
              element={
                <TabCard
                  Image={TabCardImage1}
                  ProfileImage={TabCardImage1}
                  ProfileName="profileName"
                  OrderBudget="100"
                  OrderStatus="Live"
                  OrderDate="Date"
                  OrderNumber="orderNumber"
                />
              }
            />
            {/* <Route path="/suggestedservices" element={<SuggestedServices />} /> */}

            {/* ******************************   talent section ******************* */}
            <Route path="/account-security" element={<AccountSecurityPage />} />
            <Route path="/review-as-buyer" element={<ReviewasBuyerPage />} />
            <Route
              path="/buyer-profile-list"
              element={<BuyerProfilesListPage />}
            />
            <Route path="/buyer-profile" element={<BuyerProfilePage />} />
            <Route
              path="/talent-order-delivery"
              element={<TalentServiceDeliveryPage />}
            />
            <Route path="/talent-chat" element={<TalentChatPage />} />
            <Route path="/posted-job" element={<PostedJobPage />} />
            <Route path="/buyer-requests" element={<BuyerRequestPage />} />
            <Route
              path="/talent-account"
              element={<TalentAccountSectionPage />}
            />
            <Route
              path="/talent-manage-account"
              element={<ManageAccountSectionPage />}
            />
            <Route path="/manage-gigs" element={<ManageGigsSectionPage />} />
            {/* <Route path="/seller-guide" element={<BecomeSellerGuidePage />} /> */}
            <Route path="/seller-guide" element={<BecomeSellerGuidePage />} />
            <Route path="/seller-step-one" element={<BecomeSellerStepOne />} />
            <Route path="/seller-step-two" element={<BecomeSellerStepTwo />} />
            <Route
              path="/seller-step-three"
              element={<BecomeSellerStepThree />}
            />
            <Route path="/seller-step-four" element={<BecomeSellerStepFour />} />
            <Route path="/seller-step-five" element={<BecomeSellerStepFive />} />
            <Route path="/talent-home" element={<TalentHomePage />} />
            <Route path="/talent-gig-info" element={<TalentGigInfoPage />} />
            <Route
              path="/talent-gig-order-info"
              element={<TalentGigOrderInfoPage />}
            />
            <Route
              path="/talent-gig-earning-info"
              element={<TalentGigEarningInfoPage />}
            />
            <Route path="/talent-add-new-gig" element={<TalentAddNewGigPage />} />
            <Route path="/earning" element={<TalentEarningPage />} />
            <Route path="/stripe-pay" element={<StripePaymentPage />} />
            <Route path="/payment-success" element={<Success />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;

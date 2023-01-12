import React, { Suspense, lazy } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useRoutes,
} from "react-router-dom";
import Preloader from "./components/preloader";

// my imported routed **************
import Layout from "./layouts/layout-02";
import Dashboard from "./pages/classic-plus/dashboard";
import SignIn from "./pages/classic-plus/signin";

// my imported routes ends here *********

// Classic Pages

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));
const DashboardThree = lazy(() => import("./pages/dashboard-three"));
const DashboardFour = lazy(() => import("./pages/dashboard-four"));
const DashboardFive = lazy(() => import("./pages/dashboard-five"));
// const SignIn = lazy(() => import("./pages/signin"));
const SignUp = lazy(() => import("./pages/signup"));
const VerifyAccount = lazy(() => import("./pages/verify-account"));
const ForgotPassword = lazy(() => import("./pages/forgot-password"));
const ErrorNotFound = lazy(() => import("./pages/error-404"));
const Error500 = lazy(() => import("./pages/error-500"));
const Error503 = lazy(() => import("./pages/error-503"));
const Error505 = lazy(() => import("./pages/error-505"));
const ProfileView = lazy(() => import("./pages/profile-view"));
const Connections = lazy(() => import("./pages/connections"));
const Groups = lazy(() => import("./pages/groups"));
const Events = lazy(() => import("./pages/events"));
const Timeline = lazy(() => import("./pages/timeline"));
const Pricing = lazy(() => import("./pages/pricing"));
const HelpCenter = lazy(() => import("./pages/help-center"));
const Invoice = lazy(() => import("./pages/invoice"));
const Calendar = lazy(() => import("./pages/apps/calendar"));
const Chat = lazy(() => import("./pages/apps/chat"));
const Contacts = lazy(() => import("./pages/apps/contacts"));
const FileManager = lazy(() => import("./pages/apps/file-manager"));
const Mail = lazy(() => import("./pages/apps/mail"));
// Classic Plus Pages

// const ClassicPlusDashboardOne = lazy(
//     () => import("./pages/classic-plus/dashboard-one")
// );
const ClassicPlusDashboardTwo = lazy(
    () => import("./pages/classic-plus/dashboard-two")
);
const ClassicPlusDashboardThree = lazy(
    () => import("./pages/classic-plus/dashboard-three")
);
const ClassicPlusDashboardFour = lazy(
    () => import("./pages/classic-plus/dashboard-four")
);
const ClassicPlusDashboardFive = lazy(
    () => import("./pages/classic-plus/dashboard-five")
);
const ClassicPlusSignIn = lazy(() => import("./pages/classic-plus/signin"));
const ClassicPlusSignUp = lazy(() => import("./pages/classic-plus/signup"));
const ClassicPlusVerifyAccount = lazy(
    () => import("./pages/classic-plus/verify-account")
);
const ClassicPlusForgotPassword = lazy(
    () => import("./pages/classic-plus/forgot-password")
);
const ClassicPlusErrorNotFound = lazy(
    () => import("./pages/classic-plus/error-404")
);
const ClassicPlusError500 = lazy(
    () => import("./pages/classic-plus/error-500")
);
const ClassicPlusError503 = lazy(
    () => import("./pages/classic-plus/error-503")
);
const ClassicPlusError505 = lazy(
    () => import("./pages/classic-plus/error-505")
);

const ClassicPlusProfileView = lazy(
    () => import("./pages/classic-plus/profile-view")
);
const ClassicPlusConnections = lazy(
    () => import("./pages/classic-plus/connections")
);
const ClassicPlusGroups = lazy(() => import("./pages/classic-plus/groups"));
const ClassicPlusEvents = lazy(() => import("./pages/classic-plus/events"));
const ClassicPlusTimeline = lazy(() => import("./pages/classic-plus/timeline"));
const ClassicPlusPricing = lazy(() => import("./pages/classic-plus/pricing"));
const ClassicPlusHelpCenter = lazy(
    () => import("./pages/classic-plus/help-center")
);
const ClassicPlusInvoice = lazy(() => import("./pages/classic-plus/invoice"));
const ClassicPlusCalendar = lazy(
    () => import("./pages/classic-plus/apps/calendar")
);
const ClassicPlusChat = lazy(() => import("./pages/classic-plus/apps/chat"));
const ClassicPlusContacts = lazy(
    () => import("./pages/classic-plus/apps/contacts")
);
const ClassicPlusFileManager = lazy(
    () => import("./pages/classic-plus/apps/file-manager")
);
const ClassicPlusMail = lazy(() => import("./pages/classic-plus/apps/mail"));

const App: React.FC = () => {
    // return (
    //     <>
    //         <Router>
    //             <Suspense fallback={<Preloader />}>
    //                 <Routes>
    //                     {/* Classic Routes */}

    //                     {/* Dashboard Routes */}
    //                     <Route path="/" element={<DashboardOne />} />
    //                     <Route
    //                         path="/dashboard-two"
    //                         element={<DashboardTwo />}
    //                     />
    //                     <Route
    //                         path="/dashboard-three"
    //                         element={<DashboardThree />}
    //                     />
    //                     <Route
    //                         path="/dashboard-four"
    //                         element={<DashboardFour />}
    //                     />
    //                     <Route
    //                         path="/dashboard-five"
    //                         element={<DashboardFive />}
    //                     />

    //                     {/* Authentication Routes */}
    //                     <Route path="/signin" element={<SignIn />} />
    //                     <Route path="/signup" element={<SignUp />} />
    //                     <Route
    //                         path="/verify-account"
    //                         element={<VerifyAccount />}
    //                     />
    //                     <Route
    //                         path="/forgot-password"
    //                         element={<ForgotPassword />}
    //                     />

    //                     {/* Error Routes */}
    //                     <Route path="/error-500" element={<Error500 />} />
    //                     <Route path="/error-503" element={<Error503 />} />
    //                     <Route path="/error-505" element={<Error505 />} />

    //                     {/* User Routes */}
    //                     <Route path="/profile-view" element={<ProfileView />} />
    //                     <Route path="/connections" element={<Connections />} />
    //                     <Route path="/groups" element={<Groups />} />
    //                     <Route path="/events" element={<Events />} />

    //                     {/* Other Routes */}
    //                     <Route path="/timeline" element={<Timeline />} />
    //                     <Route path="/pricing" element={<Pricing />} />
    //                     <Route path="/help-center" element={<HelpCenter />} />
    //                     <Route path="/invoice" element={<Invoice />} />

    //                     {/* Apps Routes */}
    //                     <Route path="/apps/calendar" element={<Calendar />} />
    //                     <Route path="/apps/chat" element={<Chat />} />
    //                     <Route path="/apps/contacts" element={<Contacts />} />
    //                     <Route
    //                         path="/apps/file-manager"
    //                         element={<FileManager />}
    //                     />
    //                     <Route path="/apps/mail" element={<Mail />} />

    //                     {/* Classic Plus Routes */}

    //                     {/* Dashboard Routes */}
    //                     <Route
    //                         path="/classic-plus/dashboard-one"
    //                         element={<ClassicPlusDashboardOne />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/dashboard-two"
    //                         element={<ClassicPlusDashboardTwo />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/dashboard-three"
    //                         element={<ClassicPlusDashboardThree />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/dashboard-four"
    //                         element={<ClassicPlusDashboardFour />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/dashboard-five"
    //                         element={<ClassicPlusDashboardFive />}
    //                     />

    //                     {/* Authentication Routes */}
    //                     <Route
    //                         path="/classic-plus/signin"
    //                         element={<ClassicPlusSignIn />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/signup"
    //                         element={<ClassicPlusSignUp />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/verify-account"
    //                         element={<ClassicPlusVerifyAccount />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/forgot-password"
    //                         element={<ClassicPlusForgotPassword />}
    //                     />

    //                     {/* Error Routes */}
    //                     <Route
    //                         path="/classic-plus/error-500"
    //                         element={<ClassicPlusError500 />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/error-503"
    //                         element={<ClassicPlusError503 />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/error-505"
    //                         element={<ClassicPlusError505 />}
    //                     />

    //                     {/* User Routes */}
    //                     <Route
    //                         path="/classic-plus/profile-view"
    //                         element={<ClassicPlusProfileView />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/connections"
    //                         element={<ClassicPlusConnections />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/groups"
    //                         element={<ClassicPlusGroups />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/events"
    //                         element={<ClassicPlusEvents />}
    //                     />

    //                     {/* Other Routes */}
    //                     <Route
    //                         path="/classic-plus/timeline"
    //                         element={<ClassicPlusTimeline />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/pricing"
    //                         element={<ClassicPlusPricing />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/help-center"
    //                         element={<ClassicPlusHelpCenter />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/invoice"
    //                         element={<ClassicPlusInvoice />}
    //                     />

    //                     {/* Apps Routes */}

    //                     <Route
    //                         path="/classic-plus/apps/calendar"
    //                         element={<ClassicPlusCalendar />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/apps/chat"
    //                         element={<ClassicPlusChat />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/apps/contacts"
    //                         element={<ClassicPlusContacts />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/apps/file-manager"
    //                         element={<ClassicPlusFileManager />}
    //                     />
    //                     <Route
    //                         path="/classic-plus/apps/mail"
    //                         element={<ClassicPlusMail />}
    //                     />

    //                     {/* 404 Page Route */}
    //                     <Route path="*" element={<ErrorNotFound />} />
    //                     <Route
    //                         path="*"
    //                         element={<ClassicPlusErrorNotFound />}
    //                     />
    //                 </Routes>
    //             </Suspense>
    //         </Router>
    //     </>
    // );
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Dashboard />,
                },
                {
                    path: "classic-plus/dashboard-one",
                    element: <DashboardOne />,
                },
            ],
        },
        {
            path: "classic-plus/signin",
            element: <SignIn />,
        },
    ]);
};

export default App;

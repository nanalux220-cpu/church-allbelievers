import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Ministries from "../pages/ministries/page";
import ChildrenMinistryPage from "../pages/ministries/children/page";
import YouthMinistryPage from "../pages/ministries/youth/page";
import WomensMinistryPage from "../pages/ministries/womens/page";
import MensMinistryPage from "../pages/ministries/mens/page";
import PrayerMinistryPage from "../pages/ministries/prayer/page";
import CommunityOutreachPage from "../pages/ministries/outreach/page";
import StoryPage from "../pages/about/story/page";
import BeliefsPage from "../pages/about/beliefs/page";
import TeamPage from "../pages/about/team/page";
import InteractivePage from "../pages/interactive/page";
import DonationPage from "../pages/donation/page";
import ContactPage from "../pages/contact/page";
import EventsPage from "../pages/events/page";
import PlanVisitPage from "../pages/plan-visit/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/about/story", element: <StoryPage /> },
  { path: "/about/beliefs", element: <BeliefsPage /> },
  { path: "/about/team", element: <TeamPage /> },
  { path: "/ministries", element: <Ministries /> },
  { path: "/ministries/children", element: <ChildrenMinistryPage /> },
  { path: "/ministries/youth", element: <YouthMinistryPage /> },
  { path: "/ministries/womens", element: <WomensMinistryPage /> },
  { path: "/ministries/mens", element: <MensMinistryPage /> },
  { path: "/ministries/prayer", element: <PrayerMinistryPage /> },
  { path: "/ministries/outreach", element: <CommunityOutreachPage /> },
  { path: "/interactive", element: <InteractivePage /> },
  { path: "/donation", element: <DonationPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/events", element: <EventsPage /> },
  { path: "/plan-visit", element: <PlanVisitPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;

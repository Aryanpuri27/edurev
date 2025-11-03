import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EduRev from "./pages/EduRev";
import EduRevAddAchievement from "./pages/EduRevAddAchievement";
import EduRevCategoryCourses from "./pages/EduRevCategoryCourses";
import EduRevRPLForm from "./pages/forms/EduRevRPLForm";
import EduRevMOOCForm from "./pages/forms/EduRevMOOCForm";
import EduRevGradeUpgradeForm from "./pages/forms/EduRevGradeUpgradeForm";
import EduRevProjectForm from "./pages/forms/EduRevProjectForm";
import EduRevExtraCreditsForm from "./pages/forms/EduRevExtraCreditsForm";
import EduRevSocialMediaForm from "./pages/forms/EduRevSocialMediaForm";
import EduRevRevenueGenerationForm from "./pages/forms/EduRevRevenueGenerationForm";
import EduRevInternshipsForm from "./pages/forms/EduRevInternshipsForm";
import EduRevCommunityServiceForm from "./pages/forms/EduRevCommunityServiceForm";
import Courses from "./pages/Courses";
import StudentReferral from "./pages/StudentReferral";
import BeyondAcademics from "./pages/BeyondAcademics";
import BeyondAcademicsAddAchievement from "./pages/BeyondAcademicsAddAchievement";
import BeyondAcademicsLeaderboard from "./pages/BeyondAcademicsLeaderboard";
import Dashboard from "./pages/Dashboard";
import Achievements from "./pages/Achievements";
import Projects from "./pages/Projects";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/edu-rev" element={<EduRev />} />
          <Route path="/edurev/courses/:categoryName" element={<EduRevCategoryCourses />} />
          <Route path="/edurev/apply/rpl/:courseCode?" element={<EduRevRPLForm />} />
          <Route path="/edurev/apply/mooc/:courseCode?" element={<EduRevMOOCForm />} />
          <Route path="/edurev/apply/grade-upgradation/:courseCode?" element={<EduRevGradeUpgradeForm />} />
          <Route path="/edurev/apply/project/:courseCode?" element={<EduRevProjectForm />} />
          <Route path="/edurev/apply/extra-credits/:courseCode?" element={<EduRevExtraCreditsForm />} />
          <Route path="/edurev/apply/social-media/:courseCode?" element={<EduRevSocialMediaForm />} />
          <Route path="/edurev/apply/revenue-generation/:courseCode?" element={<EduRevRevenueGenerationForm />} />
          <Route path="/edurev/apply/internships/:courseCode?" element={<EduRevInternshipsForm />} />
          <Route path="/edurev/apply/community-service/:courseCode?" element={<EduRevCommunityServiceForm />} />
          <Route path="/edurev/apply/:categoryName/:courseCode" element={<EduRevAddAchievement />} />
          <Route path="/edurev-add-achievement" element={<EduRevAddAchievement />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student-referral" element={<StudentReferral />} />
          <Route path="/beyond-academics" element={<BeyondAcademics />} />
          <Route path="/beyond-academics-add-achievement" element={<BeyondAcademicsAddAchievement />} />
          <Route path="/beyond-academics-leaderboard" element={<BeyondAcademicsLeaderboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layouts
import AppLayout from '../layouts/AppLayout';

// Auth Pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import VerifyEmailPage from '../pages/auth/VerifyEmailPage';

// App Pages
import DashboardPage from '../pages/DashboardPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import TasksPage from '../pages/TasksPage';
import NotesPage from '../pages/NotesPage';
import MembersPage from '../pages/MembersPage';

export const router = createBrowserRouter([
  // ─── Auth Routes (no sidebar) ────────────────────────
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/reset-password/:token',
    element: <ResetPasswordPage />,
  },
  {
    path: '/verify-email/:token',
    element: <VerifyEmailPage />,
  },

  // ─── App Routes (with sidebar layout) ────────────────
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectDetailPage />,
        children: [
          {
            path: 'tasks',
            element: <TasksPage />,
          },
          {
            path: 'notes',
            element: <NotesPage />,
          },
          {
            path: 'members',
            element: <MembersPage />,
          },
        ],
      },
      {
        path: 'tasks',
        element: <TasksPage />,
      },
      {
        path: 'notes',
        element: <NotesPage />,
      },
      {
        path: 'members',
        element: <MembersPage />,
      },
    ],
  },

  // ─── Catch-all ───────────────────────────────────────
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
]);

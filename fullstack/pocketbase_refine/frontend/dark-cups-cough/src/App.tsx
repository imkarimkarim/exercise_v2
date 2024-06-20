import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import PocketBase from "pocketbase";
import {
  AuthOptions,
  authProvider,
  dataProvider,
  liveProvider,
} from "refine-pocketbase";

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
} from "@refinedev/mui";

import {
  MuiCreateInferencer,
  MuiEditInferencer,
  MuiListInferencer,
  MuiShowInferencer,
} from "@refinedev/inferencer/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
// import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
// import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

function App() {
  const pb = new PocketBase("http://127.0.0.1:8090/");

  const authOptions: AuthOptions = {
    registerRedirectTo: "/posts",
    loginRedirectTo: "/posts",
    updatePasswordRedirectTo: "/login",
  };

  const providers = {
    dataProvider: dataProvider(pb),
    liveProvider: liveProvider(pb),
    authProvider: authProvider(pb, authOptions),
  };

  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            {/* <DevtoolsProvider> */}
            <Refine
              {...providers}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              resources={[
                {
                  name: "posts",
                  list: "/posts",
                  create: "/posts/create",
                  edit: "/posts/edit/:id",
                  show: "/posts/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
              ]}
              options={{
                liveMode: "auto",
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "5M6gCe-sBfQy9-a9nOQf",
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      redirectOnFail="/login"
                    >
                      <Outlet />
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="posts" />}
                  />
                  <Route path="/posts">
                    <Route
                      index
                      element={<MuiListInferencer resource="posts" />}
                    />
                    <Route
                      path="create"
                      element={<MuiCreateInferencer resource="posts" />}
                    />
                    <Route
                      path="edit/:id"
                      element={<MuiEditInferencer resource="posts" />}
                    />
                    <Route
                      path="show/:id"
                      element={<MuiShowInferencer resource="posts" />}
                    />
                  </Route>
                </Route>
                {/* <Route path="/register" element={<RegisterPage />} /> */}
                <Route path="/login" element={<Login />} />
                {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
                {/* <Route path="/update-password" element={<UpdatePasswordPage />} /> */}
                <Route path="*" element={<ErrorComponent />} />
              </Routes>

              {/* <RefineKbar /> */}
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            {/* <DevtoolsPanel /> */}
            {/* </DevtoolsProvider> */}
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

import * as Product from "./views/admin/Product";
import * as Category from "./views/admin/Category";

// TEMPLATE - Route Views
import BlogOverview from "./views/template/BlogOverview";
import UserProfileLite from "./views/template/UserProfileLite";
import AddNewPost from "./views/template/AddNewPost";
import Errors from "./views/template/Errors";
import ComponentsOverview from "./views/template/ComponentsOverview";
import Tables from "./views/template/Tables";
import BlogPosts from "./views/template/BlogPosts";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/admin/dashboard" />
  },
  {
    path: "/admin/dashboard",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/admin/produtos",
    exact: true,
    layout: DefaultLayout,
    component: Product.List
  },
  {
    path: "/admin/produtos/editar/:id",
    exact: true,
    layout: DefaultLayout,
    component: Product.Edit
  },
  {
    path: "/admin/categorias",
    exact: true,
    layout: DefaultLayout,
    component: Category.List
  },


  // Template
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];

import { Routes, Route } from "react-router-dom";
import React from "react";

// General Pages
import Home from "./pages/Home";
import Auth from "./pages/Auth/Auth.jsx";
import University from "./pages/University";

// Dashboard Components
import DashboardApp from "./Admin/dashboard/src/DashboardApp.jsx";
import Dashboard from "./Admin/dashboard/src/scenes/dashboard/index.jsx";
import Team from "./Admin/dashboard/src/scenes/team/index.jsx";
import Contacts from "./Admin/dashboard/src/scenes/contacts/index.jsx";
import Invoices from "./Admin/dashboard/src/scenes/UniversityAdmin/index.jsx";
import Form from "./Admin/dashboard/src/scenes/form/index.jsx";
import Calendar from "./Admin/dashboard/src/scenes/calendar/index.jsx";
import Bar from "./Admin/dashboard/src/scenes/bar/index.jsx";
import Pie from "./Admin/dashboard/src/scenes/pie/index.jsx";
import Stream from "./Admin/dashboard/src/scenes/stream/index.jsx";
import Line from "./Admin/dashboard/src/scenes/line/index.jsx";
import FAQ from "./Admin/dashboard/src/scenes/faq/index.jsx";
import Geography from "./Admin/dashboard/src/scenes/geography/index.jsx";

const AppRouter = () => {
    return (
        <Routes>
            {/* General Site Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/university" element={<University />} />

            {/* Dashboard Routes */}
            <Route path="/dashboard" element={<DashboardApp />}>
                <Route index element={<Dashboard />} />
                <Route path="team" element={<Team />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="form" element={<Form />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="stream" element={<Stream />} />
                <Route path="line" element={<Line />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="geography" element={<Geography />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;

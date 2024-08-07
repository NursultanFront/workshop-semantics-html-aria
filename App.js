import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global-styles/variables.scss"
import "./global-styles/styles.scss"
import Header from "components/header"
import HomePage from "components/page-home"
import AboutPage from "components/page-about"
import CareersPage from "components/page-careers"
import TripIdeasPage from "components/page-trip-ideas"
import ListingsPage from "components/page-listings"
import Listing from "components/page-listing-detail"
import EventsPage from "components/page-events"
import PassesPage from "components/page-passes"
import SubmitListingPage from "components/page-submit-listing"
import HikesPage from "components/page-adventures-hikes"
// import Exercise1ListingsPage from "./exercise1-headings-landmarks/page-listings"
// import Exercise1ListingPage from "./exercise1-headings-landmarks/page-listing-detail"
// import Exercise2ARIAListingPage from "./exercise2-what-is-aria/page-listing-detail"
// import Exercise3NamesListingPage from "./exercise3-accessible-names/page-listing-detail"
// import Exercise3NamesListingsPage from "./exercise3-accessible-names/page-listings"
// import Exercise4A11yInfoListingPage from "./exercise4-programmatic-a11y-info/page-listing-detail"

import imgFooterLogo from "images/icons/footer-logo.svg"

export function App() {
  return <>
    <Header />
    <div id="main">
    <Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/careers" element={<CareersPage />} />
    <Route path="/listings" element={<ListingsPage />} />
    <Route path="/listing/:id" element={<Listing />} />
    <Route path="/submit-listing" element={<SubmitListingPage />} />
    <Route path="/events" element={<EventsPage />} />
    <Route path="/passes" element={<PassesPage />} />
    <Route path="/adventures-hikes" element={<HikesPage />} />
    <Route path="/trip-ideas" element={<TripIdeasPage />} />
    {/* <Route path="/exercise1/listings" element={<Exercise1ListingsPage />} />
    <Route path="/exercise1/:id" element={<Exercise1ListingPage />} />
    <Route path="/exercise2/:id" element={<Exercise2ARIAListingPage />} />
    <Route path="/exercise3/:id" element={<Exercise3NamesListingPage />} />
    <Route path="/exercise3/listings" element={<Exercise3NamesListingsPage />} />
    <Route path="/exercise4/:id" element={<Exercise4A11yInfoListingPage />} /> */}
  </Routes>
</Router>

    </div>
    <div id="footer">
      <div className="layout">
        <div id="footer-logo">
          <img src={imgFooterLogo} alt="CampSpots" />
        </div>
      </div>
    </div>
  </>
}

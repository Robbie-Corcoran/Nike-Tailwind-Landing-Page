import React from "react";
import * as Sections from "./sections";
import Nav from "./components/Nav";

const App = () => (
    <main className="relative">
        <Nav/>

        <section className="xl:padding-l wide:padding-r padding-b">
            <Sections.Hero/>
        </section>

        <section className="padding">
            <Sections.PopularProducts/>
        </section>

        <section className="padding">
            <Sections.SuperQuality/>
        </section>

        <section className="padding-x py-10">
            <Sections.Services/>
        </section>

        <section className="padding">
            <Sections.SpecialOffer/>
        </section>

        <section className="bg-pale-blue padding">
            <Sections.CustomerReviews/>
        </section>

        <section className="padding-x sm:py-32 py-16 w-full">
            <Sections.Subscribe/>
        </section>

        <section className="bg-black padding-x padding-t pb-8">
            <Sections.Footer/>
        </section>
    </main>
);

export default App;

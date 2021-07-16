import React from "react";
import { Link } from "react-router-dom"

const Jobs = [
    {
        id: 0,
        className: "taskCard  currentBadge",
        link: <Link to="/" class="navIcon bi bi-table my-font" />,

        date: Date(),
        name: "Ben  Carson",
        time: "Next Time:"
    },

    {
        id: 1,
        className: "taskCard  shadow",
        link: <Link to="/" class="navIcon bi bi-table my-font" />,
        date: Date(),
        name: "Ben  Carson",
        time: "Next Time:"
    },

    {
        id: 2,
        className: "taskCard  shadow",
        link: <Link to="/" class="navIcon bi bi-table my-font" />,

        date: Date(),
        name: "Ben Carson",
        time: "Next Time:"
    },

    {
        id: 3,
        className: "taskCard  shadow",
        link: <Link to="/" class="navIcon bi bi-table my-font" />,

        date: Date(),
        name: "Ben Carson",
        time: "Next Time:"
    }
]

// const jobs = Jobs.map(jobsId => jobsId.date)

// console.log(jobs);

export default Jobs;
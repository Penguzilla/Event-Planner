import NavBar from "../routes/NavBar";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Dashboard() {
    return (
        <div>
        <NavBar />
        <h1>Dashboard</h1>
        </div>
    );
}
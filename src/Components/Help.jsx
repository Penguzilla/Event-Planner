import NavBar from "../routes/NavBar";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Help() {
    return (
        <div>
        <NavBar />
        <h1>Help</h1>
<br />
        <h3>Registration</h3>
<p>
    Click on the <b>Registration</b> button on the navigation bar. Fill in your username, email, 
    and choose a password. Make sure your password is more than 8 characters long and includes both 
    numbers and special characters. Then click the register button. You should receive a message 
    confirming that you have successfully registered.
</p>
<br/>

<h3>Login</h3>
<p>
    Once you have registered an account, click <b>Home</b> on the navigation bar. Enter your 
    username and password, then click login. You should get a welcome message confirming that you 
    have logged in. You will now also see more options on the navigation bar.
</p>
<br/>

<h3>Create New Event</h3>
<p>
    Click on <b>New Event</b>. Fill in the details of the event you want to add and click the 
    submit button.
</p>
<br/>

<h3>Edit Event</h3>
<p>
    Go to the <b>Dashboard</b> on your navigation bar. Click on the event you want to edit. A pop-up 
    will appear with an edit button. Click edit, make your changes, and then click submit.
</p>
<br/>

<h3>Delete Event</h3>
<p>
    Go to the <b>Dashboard</b> on your navigation bar. Click on the event you want to delete. A pop-up 
    will appear with a delete button. Click <b>Delete Event</b>.
</p>
<br/>

<h3>Tips for a Great Event</h3>
<p>
<ul>
    <li>
        Keep in mind the type of event and the guests you want to invite, and schedule it at 
        an appropriate time. For example, meetings are best scheduled during work hours, while 
        a birthday party would be better on a weekend.
    </li>
    <li>
        Give enough notice for the event you are planning.
    </li>
    <li>
        Remember the 5 Ps: <b>Proper Planning Prevents Poor Performance.</b>  
        Write down your plan in detail.
    </li>
    <li>
        If it is an outdoor event, make sure you have a backup plan in case of bad weather.
    </li>
    <li>
        Ensure the venue is appropriate for the number of guests you plan to invite.
    </li>
    <li>
        Confirm ahead of time that all vendor payments have been settled.
    </li>
    <li>
        Keep a list of all important personnel for the event in an easily accessible place.
    </li>
</ul>
        </p>
        </div>
    );
}
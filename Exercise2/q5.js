//5. Create ReactJs/Angular web project on local system for below mentioned usability.
//(For ReactJS Group)
//Design a login page with username and password as textfields. There will be a submit button
//and cancel
//button in that page. Now create a dummy data for valid username and password in the
//corresponding
//Javascript/Typescript file. Use onclick event in (ReactJs) to validate userbname and password
//and direct to
//another page(home.html)
import { useState } from &#39;react&#39;;
export default function Form() {
// States for registration
const [name, setName] = useState(&#39;&#39;);
const [email, setEmail] = useState(&#39;&#39;);
const [password, setPassword] = useState(&#39;&#39;);
// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
// Handling the name change
const handleName = (e) =&gt; {
setName(e.target.value);
setSubmitted(false);
};
// Handling the email change
const handleEmail = (e) =&gt; {
setEmail(e.target.value);
setSubmitted(false);
};
// Handling the password change
const handlePassword = (e) =&gt; {
setPassword(e.target.value);
setSubmitted(false);
};
// Handling the form submission
const handleSubmit = (e) =&gt; {
e.preventDefault();
if (name === &#39;&#39; || email === &#39;&#39; || password === &#39;&#39;) {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () =&gt; {
return (
&lt;div
className=&quot;success&quot;
style={{
display: submitted ? &#39;&#39; : &#39;none&#39;,
}}&gt;
&lt;h1&gt;User {name} successfully registered!!&lt;/h1&gt;
&lt;/div&gt;
);
};
// Showing error message if error is true
const errorMessage = () =&gt; {
return (
&lt;div
className=&quot;error&quot;
style={{
display: error ? &#39;&#39; : &#39;none&#39;,
}}&gt;
&lt;h1&gt;Please enter all the fields&lt;/h1&gt;
&lt;/div&gt;
);
};
return (
&lt;div className=&quot;form&quot;&gt;
&lt;div&gt;
&lt;h1&gt;User Registration&lt;/h1&gt;
&lt;/div&gt;
{/* Calling to the methods */}
&lt;div className=&quot;messages&quot;&gt;
{errorMessage()}
{successMessage()}
&lt;/div&gt;
&lt;form&gt;
{/* Labels and inputs for form data */}
&lt;label className=&quot;label&quot;&gt;UserName&lt;/label&gt;
&lt;input onChange={handleName} className=&quot;input&quot;
value={name} type=&quot;text&quot; /&gt;
&lt;label className=&quot;label&quot;&gt;Password&lt;/label&gt;
&lt;input onChange={handlePassword} className=&quot;input&quot;
value={password} type=&quot;password&quot; /&gt;
&lt;button onClick={handleSubmit} className=&quot;btn&quot; type=&quot;submit&quot;&gt;

Submit
&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
);
}
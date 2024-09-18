// Basic validation
if (username === "" || password === "") {
    alert("Please enter both username and password.");
    return false;
}

// Replace this with actual authentication logic
// Check against a database or server-side script
if (username === "admin" && password === "password") {
    alert("Login successful!");
    // Redirect to student portal or homepage
    window.location.href = "student_portal.html";
} else {
    alert("Invalid username or password.");
}

return false;
}


### 4. **Login Form**
Insert a login form into the `main` section.

```html
<main>
    <h2>Login</h2>
    <form onsubmit="return validateLogin()">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"   
 required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">   

    </form>   

</main>
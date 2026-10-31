
    let form = document.getElementById("form-conitainer");

    let studentInf = document.getElementById("StudInf");

    let err = document.getElementById("error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("Name").value.trim();

      let email = document.getElementById("Email").value.trim();

      let password = document.getElementById("Password").value.trim();

      let conformpassword = document.getElementById("Conform-Password").value.trim();



//   agar koi ek bhi nhi fill hua to  if ka condition true ho jayga aur ander ka code run hoga aur agar sab form fillup ho jata  hai to condition false ho jayega aur if ke ander ka koi code nhi chalega


      if (!name || !email || !password || !conformpassword) {
        // err.innerText = "<p>fill up your email</p>"

        err.innerText = " Please Fill up in all fields !";
        err.style.color = "red";

        // alert("Please Fill up in all fields !");
        return;
      }

      if (conformpassword !== password) {
        err.innerText = "Password do not match!";
        err.style.color = "red";

        return ;
      }


      err.textContent = "Form submitted successfully!";
      err.style.color = "green";
      alert("Form submitted successfully");
      localStorage.setItem("signupComplete", "true");
      window.location.href = "index.html";

    });

let get_started_btn = document.querySelector(".btn-strt");
let drawer_open_btn = document.querySelector(".mb-drawer-open");
let drawer = document.querySelector(".drawer");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let project = document.querySelector(".project");
let description = document.querySelector(".description");


get_started_btn.addEventListener("click", (e) => {
  let isMobile = window.innerWidth < window.innerHeight ? true : false;
  window.location.hash = "home";
  setTimeout(() => {
    isMobile
      ? (window.location.hash = "services-mb")
      : (window.location.hash = "services");
  }, 500);
});

const sendData = (nm, em, pr, desc) => {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "$USERNAME",
    Password : "$PASSWORD",
    To : em,
    From : "sidhu3612@gmail.com",
    Subject : "Project Details Recieved",
    Body : createEmailBody("Hi,<br>"+nm+"<br>","Thank You For Messaging Me..!","i will send a response within one week.","sidhu3612@gmail.com"),
}).then(
  (message) => {alert(message == "OK"?"Message Sent Check Your Mail Spam Folder":"Message Not Sent..Try Again..!");
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "$USERNAME",
    Password : "$PASSWORD",
    To : "sidhu3612@gmail.com",
    From : "sidhu3612@gmail.com",
    Subject : "Project Details",
    Body : createEmailBody("Name :"+nm,"Project Name :"+pr,"Description :"+desc,em),
});}
);
};

const submitData = () => {
  if (name.value != "") {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.value).toLowerCase()) && email.value != "") {
      if (project.value != "" && description.value != "") {
        sendData(name.value, email.value, project.value, description.value);
        name.value = "";
        email.value = "";
        project.value = "";
        description.value = "";
      } else {
        alert("Please Enter Project Details");
      }
    } else {
      alert("Please Enter Proper Email");
    }
  } else {
    alert("Please Enter Your Name");
  }
};

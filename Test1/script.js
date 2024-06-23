"use strict";

const data = [
  // 1
  {
    sender: "Sanatan Sukija",
    date: "Feb, 23",
    message:
      "Dr. Sanatan Sukhija is currently working as an Assistant Professor in the Department of Computer Science and Engineering at Mahindra University",
  },

  {
    sender: "Yayati Gupta",
    date: "Feb, 23",
    message:
      " Dr. Yayati Gupta is currently working as an Assistant Professor in the Department of Computer Science and Engineering at Mahindra University",
  },
  {
    sender: "Chaitanya Kumar",
    date: "March, 22",
    message:
      " Chaitanya, your application was sent to WebGo Software Labs",
  },
  // 2
  {
    sender: "Srikanth Mathala",
    date: "Feb, 15",
    message:
      "Successfully submitted application for Srikanth Mathala",
  },
  //  3
  {
    sender: "Abhishek Chodavarpu",
    date: "Feb, 14",
    message:
      " Sent ₹ 1000 to MANORAMA BARAI",
  },
  // 4
  {
    sender: "Vasundhara",
    date: "March, 11",
    message:
      "Welcome + Safety instructions",
  },
  // 5
  {
    sender: "Sona",
    date: "March, 12",
    message:
      "Event invitation: End Course Feedback: Deadline Reminder",
  },

  // 6
  {
    sender: "Heshika",
    date: "March, 5",
    message:
      "Font size issue - After New Update",
  },
  // 7
  {
    sender: "Srihita",
    date: "Dec, 21",
    message:
      "Resume for SDE- Intern Zerobug",
  },
  // 8
  {
    sender: "Mahindra University",
    date: "Dec, 10",
    message:
      "Your order#65828 on https://muerp.mahindrauniversity.edu.in is successful ",
  },
  // 9
  {
    sender: "Amazon",
    date: "May, 20",
    message:
      " Rate your delivered products of order# NYK-196375294-4733304",
  },
  // 10
  {
    sender: "Alexa",
    date: "Feb, 12",
    message:
    " Rate your delivered products of order# NYK-196375294-4733304",},
  // 11
  {
    sender: "Flipkart",
    date: "Jun, 25",
    message:
    " Rate your delivered products of order# NYK-196375294-4733304",},
  // 12
  {
    sender: "Moe",
    date: "Sep, 28",
    message:
      "Tell us about your KYC experience of your 811 account",
  },
  // 13
  {
    sender: "Jey",
    date: "Jan, 17",
    message:
      "Ssshhh! Your secret OTP is here. 🤓",
  },
  // 14
  {
    sender: "Adam",
    date: "March, 15",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
  },
  // 17
  {
    sender: "Slef",
    date: "March, 31",
    message:
      "Action required: Please confirm to post requiremen",
  },
];

const messages = document.querySelector(".messages_area");

const render = function (data) {
  messages.innerHTML = data
    .map(
      (d) => `<div class="messages">
  <div class="messages_left">
    <div class="check check_2">
      <img src="./img/checkbox.png" alt="" />
      <span> <ion-icon name="checkmark"></ion-icon> </span>
    </div>
    <ion-icon name="star-outline" class="hover star"></ion-icon>
    <span>${d.sender}</span>
  </div>
  <div class="messages_content">${d.message}</div>
  <div class="messages_date">${d.date}</div>
</div>`
    )
    .join(" ");
};

render(data);
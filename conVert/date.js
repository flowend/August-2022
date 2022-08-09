const newsfeedContent = {
  myAccount: {
    username: "flow",
    firstName: "Florina",
    lastName: "Ghinea",
    profileImg: "https://source.unsplash.com/60x60",
    authToken: "biv78w4v75awibca57rav8io4t",
  },
  newsfeed: [
    {
      author: {
        username: "littlesistersinc",
        firstName: "Brigit",
        lastName: "Tenenbaum",
        postDate: "30 Nov 1967",
        profileImg: "https://source.unsplash.com/61x61",
      },
      metadata: {
        likes: 0,
        comments: [],
        shares: 1,
      },
      content: {
        images: [
          "https://source.unsplash.com/601x400",
          "https://source.unsplash.com/602x400",
        ],
        text: "",
        videos: [],
      },
    },
    {
      author: {
        username: "roblutece",
        firstName: "Robert",
        lastName: "Lutece",
        postDate: "01 Jan 1970",
        profileImg: "https://source.unsplash.com/61x61",
      },
      metadata: {
        likes: 12,
        comments: [
          {
            author: {
              username: "rosalute",
              firstName: "Rosalind",
              lastName: "Lutece",
              postDate: "20 Dec 1963",
              profileImg: "https://source.unsplash.com/62x62",
            },
            content: `One could believe a mission is doomed to failure… and wish sincerely that it wasn't. Hopes, like quantum superpositions, have a tendency to collapse.`,
          },
        ],
        shares: 35,
      },
      content: {
        images: [],
        text: `The mind of the subject will desperately struggle to create memories where none exist…`,
        videos: [],
      },
    },
    {
      author: {
        username: "ryaninc",
        firstName: "Andrew",
        lastName: "Ryan",
        postDate: "13 Feb 1968",
        profileImg: "https://source.unsplash.com/61x61",
      },
      metadata: {
        likes: 451,
        comments: [
          {
            author: {
              username: "fontainefish",
              firstName: "Frank",
              lastName: "Fontaine",
              postDate: "30 Nov 1969",
              profileImg: "https://source.unsplash.com/62x62",
            },
            content: `All right, all right, you looking to slug it out? I'm game. But I've got all the ADAM in the city, pal. And now, I'm jake to take her out for a spin...`,
          },
        ],
        shares: 322,
      },
      content: {
        images: ["https://source.unsplash.com/603x400"],
        text: `I am Andrew Ryan, and I'm here to ask you a question. Is a man not entitled to the sweat of his brow? "No," says the man in Washington, "it belongs to the poor." "No," says the man in the Vatican, "it belongs to God." "No," says the man in Moscow, "it belongs to everyone." I rejected those answers; instead, I chose something different. I chose the impossible. I chose... Rapture. A city where the artist would not fear the censor; where the scientist would not be bound by petty morality; where the great would not be constrained by the small! And with the sweat of your brow, Rapture can become your city as well.`,
        videos: [],
      },
    },
  ],
};

const userData = [
  {
    admin: true,
    name: "Zmed Alex",
    username: "zmedalex",
    email: "name@provider.com",
    status: "banned",
    favoriteFruits: ["apple", "kiwi", "banana"],
    privateData: true,
  },
  {
    admin: false,
    name: "John Doe",
    username: "unknown",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["apple", "kiwi", "banana"],
    privateData: true,
  },
  {
    admin: false,
    name: "John Doe",
    username: "unknown",
    email: "name@provider.com",
    status: "suspended",
    favoriteFruits: ["apple", "kiwi", "banana"],
    privateData: true,
  },
  {
    admin: false,
    name: "John Doe",
    username: "unknown",
    email: "name@provider.com",
    status: "active",
    favoriteFruits: ["apple", "kiwi", "banana"],
    privateData: true,
  },
];

const ads = [
  "https://placehold.it/300x300",
  "https://placehold.it/301x300",
  "https://placehold.it/302x300",
  "https://placehold.it/303x300",
  "https://placehold.it/304x300",
  "https://placehold.it/305x300",
  "https://placehold.it/306x300",
  "https://source.unsplash.com/300x300",
];

const adSpace = document.querySelector("#adSpace");

adSpace.innerHTML = `<img src=
"${ads[Math.floor(Math.random() * ads.length)]}"
alt="ad 1"
class="img-responsive"
/> `;

/*
Math - contine toate metodele de mate din javascript
.random() - genereaza un numar aleatoriu intre 0 si 1
.floor(NUMAR) - rotunjeste NUMAR in jos
*/

const openNotifications = document.querySelector("#notificationIcon1");
const headerDD = document.querySelectorAll(".dropdown");

openNotifications.addEventListener("click", function () {
  for (let i = 0; i < headerDD.length; i++) {
    if (headerDD[i].classList.contains("notification")) {
      if (headerDD[i].style.display === "none") {
        headerDD[i].style.display = "block";
      } else {
        headerDD[i].style.display = "none";
      }
    }
  }
});

const openNotifications2 = document.querySelector("notificationIcon2");


openNotifications2.addEventListener("click", function () {
  for (let i = 0; i < headerDD.length; i++) {
    if (headerDD[i].classList.contains("messages")) {
      if (headerDD[i].style.display === "none") {
        headerDD[i].style.display = "block";
      } else {
        headerDD[i].style.display = "none";
      }
    }
  }
});

const openNotifications3 = document.querySelector("notificationIcon3");


openNotifications3.addEventListener("click", function () {
  for (let i = 0; i < headerDD.length; i++) {
    if (headerDD[i].classList.contains("settings")) {
      if (headerDD[i].style.display === "none") {
        headerDD[i].style.display = "block";
      } else {
        headerDD[i].style.display = "none";
      }
    }
  }
});
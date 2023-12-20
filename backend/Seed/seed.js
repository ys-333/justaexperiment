const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))
const Users = [
  {
    name: 'n1',
    email: 'n1@gmail.com',
    password: 'n1pass',
    location: 'n1location',
  },
  {
    name: 'n2',
    email: 'n2@gmail.com',
    password: 'n2pass',
    location: 'n2location',
  },
  {
    name: 'n3',
    email: 'n3@gmail.com',
    password: 'n3pass',
    location: 'n3location',
  },
  {
    name: 'n4',
    email: 'n4@gmail.com',
    password: 'n4pass',
    location: 'n4location',
  },
  {
    name: 'n5',
    email: 'n5@gmail.com',
    password: 'n5pass',
    location: 'n5location',
  },
  {
    name: 'n6',
    email: 'n6@gmail.com',
    password: 'n6pass',
    location: 'n6location',
  },
  {
    name: 'n7',
    email: 'n7@gmail.com',
    password: 'n7pass',
    location: 'n7location',
  },
  {
    name: 'n8',
    email: 'n8@gmail.com',
    password: 'n8pass',
    location: 'n8location',
  },
  {
    name: 'n9',
    email: 'n9@gmail.com',
    password: 'n9pass',
    location: 'n9location',
  },
  {
    name: 'n10',
    email: 'n10@gmail.com',
    password: 'n10pass',
    location: 'n10location',
  },
  {
    name: 'n11',
    email: 'n11@gmail.com',
    password: 'n11pass',
    location: 'n11location',
  },
  {
    name: 'n12',
    email: 'n12@gmail.com',
    password: 'n12pass',
    location: 'n12location',
  },
  {
    name: 'n13',
    email: 'n13@gmail.com',
    password: 'n13pass',
    location: 'n13location',
  },
  {
    name: 'n14',
    email: 'n14@gmail.com',
    password: 'n14pass',
    location: 'n14location',
  },
  {
    name: 'n15',
    email: 'n15@gmail.com',
    password: 'n15pass',
    location: 'n15location',
  },
  {
    name: 'n16',
    email: 'n16@gmail.com',
    password: 'n16pass',
    location: 'n16location',
  },
  {
    name: 'n17',
    email: 'n17@gmail.com',
    password: 'n17pass',
    location: 'n17location',
  },
  {
    name: 'n18',
    email: 'n18@gmail.com',
    password: 'n18pass',
    location: 'n18location',
  },
  {
    name: 'n19',
    email: 'n19@gmail.com',
    password: 'n19pass',
    location: 'n19location',
  },
  {
    name: 'n20',
    email: 'n20@gmail.com',
    password: 'n20pass',
    location: 'n20location',
  },
  {
    name: 'n21',
    email: 'n21@gmail.com',
    password: 'n21pass',
    location: 'n21location',
  },
  {
    name: 'n22',
    email: 'n22@gmail.com',
    password: 'n22pass',
    location: 'n22location',
  },
  {
    name: 'n23',
    email: 'n23@gmail.com',
    password: 'n23pass',
    location: 'n23location',
  },
  {
    name: 'n24',
    email: 'n24@gmail.com',
    password: 'n24pass',
    location: 'n24location',
  },
  {
    name: 'n25',
    email: 'n25@gmail.com',
    password: 'n25pass',
    location: 'n25location',
  },
  {
    name: 'n26',
    email: 'n26@gmail.com',
    password: 'n26pass',
    location: 'n26location',
  },
  {
    name: 'n27',
    email: 'n27@gmail.com',
    password: 'n27pass',
    location: 'n27location',
  },
  {
    name: 'n28',
    email: 'n28@gmail.com',
    password: 'n28pass',
    location: 'n28location',
  },
  {
    name: 'n29',
    email: 'n29@gmail.com',
    password: 'n29pass',
    location: 'n29location',
  },
  {
    name: 'n30',
    email: 'n30@gmail.com',
    password: 'n30pass',
    location: 'n30location',
  },
  {
    name: 'n31',
    email: 'n31@gmail.com',
    password: 'n31pass',
    location: 'n31location',
  },
  {
    name: 'n32',
    email: 'n32@gmail.com',
    password: 'n32pass',
    location: 'n32location',
  },
  {
    name: 'n33',
    email: 'n33@gmail.com',
    password: 'n33pass',
    location: 'n33location',
  },
  {
    name: 'n34',
    email: 'n34@gmail.com',
    password: 'n34pass',
    location: 'n34location',
  },
  {
    name: 'n35',
    email: 'n35@gmail.com',
    password: 'n35pass',
    location: 'n35location',
  },
  {
    name: 'n36',
    email: 'n36@gmail.com',
    password: 'n36pass',
    location: 'n36location',
  },
  {
    name: 'n37',
    email: 'n37@gmail.com',
    password: 'n37pass',
    location: 'n37location',
  },
  {
    name: 'n38',
    email: 'n38@gmail.com',
    password: 'n38pass',
    location: 'n38location',
  },
  {
    name: 'n39',
    email: 'n39@gmail.com',
    password: 'n39pass',
    location: 'n39location',
  },
  {
    name: 'n40',
    email: 'n40@gmail.com',
    password: 'n40pass',
    location: 'n40location',
  },
  {
    name: 'n41',
    email: 'n41@gmail.com',
    password: 'n41pass',
    location: 'n41location',
  },
  {
    name: 'n42',
    email: 'n42@gmail.com',
    password: 'n42pass',
    location: 'n42location',
  },
  {
    name: 'n43',
    email: 'n43@gmail.com',
    password: 'n43pass',
    location: 'n43location',
  },
  {
    name: 'n44',
    email: 'n44@gmail.com',
    password: 'n44pass',
    location: 'n44location',
  },
  {
    name: 'n45',
    email: 'n45@gmail.com',
    password: 'n45pass',
    location: 'n45location',
  },
  {
    name: 'n46',
    email: 'n46@gmail.com',
    password: 'n46pass',
    location: 'n46location',
  },
  {
    name: 'n47',
    email: 'n47@gmail.com',
    password: 'n47pass',
    location: 'n47location',
  },
  {
    name: 'n48',
    email: 'n48@gmail.com',
    password: 'n48pass',
    location: 'n48location',
  },
  {
    name: 'n49',
    email: 'n49@gmail.com',
    password: 'n49pass',
    location: 'n49location',
  },
  {
    name: 'n50',
    email: 'n50@gmail.com',
    password: 'n50pass',
    location: 'n50location',
  },
  {
    name: 'n51',
    email: 'n51@gmail.com',
    password: 'n51pass',
    location: 'n51location',
  },
  {
    name: 'n52',
    email: 'n52@gmail.com',
    password: 'n52pass',
    location: 'n52location',
  },
  {
    name: 'n53',
    email: 'n53@gmail.com',
    password: 'n53pass',
    location: 'n53location',
  },
  {
    name: 'n54',
    email: 'n54@gmail.com',
    password: 'n54pass',
    location: 'n54location',
  },
  {
    name: 'n55',
    email: 'n55@gmail.com',
    password: 'n55pass',
    location: 'n55location',
  },
  {
    name: 'n56',
    email: 'n56@gmail.com',
    password: 'n56pass',
    location: 'n56location',
  },
  {
    name: 'n57',
    email: 'n57@gmail.com',
    password: 'n57pass',
    location: 'n57location',
  },
  {
    name: 'n58',
    email: 'n58@gmail.com',
    password: 'n58pass',
    location: 'n58location',
  },
]

var count = 1

async function signUpUserHelper(user) {
  const response = await fetch('http://localhost:3000/signup', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  if (data.success) {
    console.log(count)
    count++
  } else console.log('error')
}

module.exports = signUpUsers = async () => {
  Users.map((user) => {
    signUpUserHelper(user)
  })
}

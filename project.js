let students = [{name: "Dhyani", ER : 190010107058, branch: "Computer-Engineering", subject: "DBMS", grade: "A", sem: 6},
{name: "Rita", ER : 190010107005, branch: "Computer-Engineering", subject: "OOP Java Learning", grade: "C", sem: 5},
{name: "Mansi", ER : 190010107041, branch: "Computer-Engineering", subject: "Analysis of Algorithms", grade: "B", sem: 3},
{name: "Vyoma", ER : 190010107004, branch: "Computer-Engineering", subject: "Discrete Maths", grade: "D", sem: 4},
{name: "Jyoti", ER : 190010107078, branch: "Computer-Engineering", subject: "Web Programming", grade: "C", sem: 6},
{name: "Heny", ER : 190010107065, branch: "Computer-Engineering", subject: "Operating System", grade: "A", sem: 5},
{name: "Sonia", ER : 190010107014, branch: "Computer-Engineering", subject: "Data-Visualzation", grade: "B", sem: 4},
{name: "Chandani", ER : 190010107021, branch: "Computer-Engineering", subject: "Software Engineering", grade: "C", sem: 3},
{name: "Lora", ER : 190010107001, branch: "Computer-Engineering", subject: "DBMS", grade: "A", sem: 6},
{name: "Rutanshi", ER : 190010107066, branch: "Computer-Engineering", subject: "Python for Data Science", grade: "B", sem: 2}
]

let table = document.getElementById("information");

const search = () => {
    let userinput = document.getElementById("input").value;
    for(let i = 0; i < students.length; i++)
    {   
        if(students[i].ER.toString() === userinput)
        {
            document.getElementById("data").rows[1].cells[0]. innerHTML = students[i].name;
            document.getElementById("data").rows[1].cells[1]. innerHTML = students[i].ER;
            document.getElementById("data").rows[1].cells[2]. innerHTML = students[i].branch;
            document.getElementById("data").rows[1].cells[3]. innerHTML = students[i].subject;
            document.getElementById("data").rows[1].cells[4]. innerHTML = students[i].grade;
            document.getElementById("data").rows[1].cells[5]. innerHTML = students[i].sem;
        }
    }
}
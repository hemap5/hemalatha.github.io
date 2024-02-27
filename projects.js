const projects = [
    {
        title: 'Human Face Mask Detection',
        image: 'images/mask.png',
        codeUrl: 'https://github.com/hemap5/face-mask-detection',
        url: 'https://github.com/hemap5/face-mask-detection',
        type: 'Machine Learning',
        demoable: false,
        description: `A deep learning model based on Convolutional Neural Networks which
        determines whether a person is wearing a mask or not.`
    },
    {
        title: 'Smart Atendance System',
        image: 'images/smart.png',
        codeUrl: 'https://github.com/hemap5/smart-attendance-system',
        url: 'https://github.com/hemap5/smart-attendance-system',
        type: 'Python',
        demoable: false,
        description: `A Python Application that generates QC codes for students and detects them via video feed.`
    },
    {
        title: 'Graduate Admit Prediction',
        image: 'images/admit.png',
        codeUrl: 'https://github.com/hemap5/graduate-admit-prediction',
        url: 'https://github.com/hemap5/graduate-admit-prediction',
        type: 'Machine Learning',
        demoable: false,
        description: `A Machine Learning model that analyzes different algorithms and predicts
        if a student can get an admit into a university.`
    },
    {
        title: 'Interactive Chat Bot - Jarvis',
        image: 'images/chat.jpg',
        codeUrl: 'https://github.com/hemap5/seq2seq-chatbot',
        url: 'https://github.com/hemap5/seq2seq-chatbot',
        type: 'Machine Learning',
        demoable: false,
        description: `A seq2seq deep learning model based on Recurrent Neural Networks that is trained on the Cornell movie conversations Dataset.`
    },
    {
        title: 'Student Grade Prediction',
        image: 'images/grade.jpeg',
        codeUrl: 'https://github.com/hemap5/student-grade-prediction',
        url: 'https://github.com/hemap5/student-grade-prediction',
        type: 'Machine Learning',
        demoable: false,
        description: `A machine learning project that uses both Naive Bayes and Decision
        Tree algorithms to predict the grade of a student.
        Technologies: Python, Scikit-learn, pandas, matplotlib`
    },
    {
        title: 'Happy Birthday',
        type: 'Python, Turtle',
        demoable: false,
        codeUrl: 'https://github.com/hemap5/Birthday',
        image: 'images/cake.png',
        url: 'https://github.com/hemap5/Birthday',
        description: `A python application that draws a cake and a text "Happy Birthday"
        using "Turtle" module in Python.`
    }
]

let search_input = document.getElementById('search');

function debounce(callback, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
}

search_input.addEventListener(
    "keyup",
    debounce(filter, 1000)
);


function displayProjects(list) {
    let value = ``;
    list.forEach((project) => {
        const viewCode = `
        <a class="btn btn-primary" onclick="window.open('${project.url}', '_blank');">View Code</a>
        `;
        const demoCode = `
        <a class="btn btn-danger" onclick="window.open('${project.url}', '_blank');">Demo</a>
        `;
        value += `
        <div class="card" style="width: 18rem;">
             <a href=${project.url} style="text-decoration: none;">
             <img class="thumbnail" src=${project.image} />
            <div class="card-body">
                 <h6 class="post-title">${project.title}</h6>
                 <p class="post-title">${project.type}</p>
                   <p class="post-intro" id="para"><b>${project.description}</b></p>
                ${viewCode}
                ${project.demoable ? demoCode : ''}
            </div>
        </div>
        `

    });

    document.getElementById('post-wrapper').innerHTML = value;
}

function filter() {
    let list = [];
    let searchText = document.getElementById('search').value;
    list = projects.filter(project => {
        let name = project.title + " " + project.type + " " + project.description;
        return name.trim().toLowerCase().includes(searchText.trim().toLowerCase());
    })
    if (list.length != 0)
        displayProjects(list);
    else
        displayProjects(projects);
}


displayProjects(projects);


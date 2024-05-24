// script.js
function showAppDetails(appId) {
    var appDetails = {
        'app1': {
            name: 'Karai Kavalan',
            description: 'Karai Kavalan: Your Safety Companion. Report incidents, track complaints, and connect with the Karaikal District Police—all in one easy-to-use app. Download now and join us in creating a safer community together.',
            link: 'https://play.google.com/store/apps/details?id=com.aa.complaint_app',
            icon: './assets/karaiKavalan.png',
            live: true
        },
        'app2': {
            name: 'Gyanith 24',
            description: 'GYANITH \'24, the annual Science and Technology of the National Institute of Technology Puducherry. Gyanith is a platform started in 2017 that paves the way for the student community to showcase their technical prowess.',
            link: 'https://play.google.com/store/apps/details?id=com.nitpy.gyanith24&hl=en_IN&gl=US',
            icon: './assets/gyanith24logo.png',
            live: true
        },
        'app3': {
            name: 'Gyanith 23',
            description: 'Stay updated with all the latest happenings of Gyanith 23, the annual technical festival of National Institute of Technology, Puducherry.',
            link: 'https://play.google.com/store/apps/details?id=org.gyanith.gyanith23&hl=en_IN&gl=US',
            icon: './assets/gyanith.png',
            live: true
        },
        'app4' : {
            name: 'Drum Pad : Beat Master',
            description: 'Drum Pad Machine is a popular DJ beats music mixer. Create music with the DJ app in just a few clicks on your own.',
            link: 'https://play.google.com/store/apps/details?id=com.appsait.drums_pad',
            icon: './assets/drumpad.png',
            live: true
        },
        'app5' : {
            name: 'Resume Builder : PDF Creator',
            description: 'Resume is first impression while job hunting. Resume PDF Maker app will help you to create, make, edit, share professional format resumes in pdf format quickly.',
            link: 'https://play.google.com/store/apps/details?id=com.appsait.resume_builder&hl=en_IN&gl=US',
            icon: './assets/resume.png',
            live: true
        },
        'app6' : {
            name: 'Chit Chat',
            description: 'Chit – chat application system is a real time application used in effective communication between the sender and the receiver. The user can sign up or login to start a conversation between the users.',
            link: 'https://github.com/vikram-vikky2002/ChitChat',
            icon: './assets/chitchat.png',
            live: false
        },
        'app7' : {
            name: 'Expense Tracker',
            description: 'Experience Tracker is a powerful and intuitive Android app designed to seamlessly capture, organize, and analyze your life\'s experiences.',
            link: 'https://github.com/vikram-vikky2002/Expenses-Tracker-App.git',
            icon: './assets/expense.png',
            live: false
        },
        'app8' : {
            name: 'Code Summarizer',
            description: 'Code summarizer model which will help the developers to understand the purpose and functionality of different parts of the code. Automatically generated comments can serve as an initial draft for code documentation, making it easier to keep documentation up to date.',
            link: '',
            icon: './assets/python.png',
            live: false
        },
        'app9' : {
            name: 'Petrol Bunk Management Software',
            description: 'Petrol Bunk Management System is a robust and user-friendly application developed using Python with a graphical user interface (GUI).',
            link: 'https://github.com/vikram-vikky2002/PetrolPump-Management-Python.git',
            icon: './assets/python.png',
            live: false
        },
    };

    var appDetail = appDetails[appId];

    if (appDetail) {
        document.getElementById('app-name').textContent = appDetail.name;
        document.getElementById('app-description').textContent = appDetail.description;
        document.getElementById('app-link').href = appDetail.link;
        document.querySelector('.details-content img').src = appDetail.icon;
        if(appDetail.live == false) {
            document.getElementById('live').hidden = true;
        } else {
            document.getElementById('live').hidden = false;
        }

        document.querySelector('.app-grid').classList.remove('view');
        document.querySelector('.app-grid').classList.add('hide');
        document.querySelector('.app-details').classList.add('view');
    }
}

function closeAppDetails() {
    document.querySelector('.app-details').classList.remove('view');
    document.querySelector('.app-grid').classList.remove('hide');
    document.querySelector('.app-grid').classList.add('view');
}

setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();



    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;

    } else if (hour == 0) {
        hr = 12;

    }

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime =
        hour +
        ":" +
        min;

    // Displaying the time
    document.getElementById(
        "time-widget-hr"
    ).innerHTML = hour;
    document.getElementById(
        "time-widget-min"
    ).innerHTML = min;
    document.getElementById(
        "noti-time"
    ).innerHTML = currentTime;
}

showTime();
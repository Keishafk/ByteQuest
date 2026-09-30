function showSection(sectionId) {
    const targetId = sectionId || 'home';
    document.querySelectorAll('.page-section').forEach((section) => {
        section.classList.toggle('active-section', section.id === targetId);
    });
}

function handleRoute() {
    const hash = window.location.hash.replace('#', '');
    showSection(hash || 'home');
}

window.addEventListener('hashchange', handleRoute);

document.addEventListener('DOMContentLoaded', () => {
    handleRoute();

    /* Exercise 2 */
    document.getElementById('runAct1')?.addEventListener('click', () => {
        console.log('Welcome to ByteQuest! This is your first JavaScript output.');
        alert('Welcome to ByteQuest! Check the browser console (F12).');
    });

    document.getElementById('runAct2')?.addEventListener('click', () => {
        const name = 'Student';
        const age = 20;
        const isStudent = true;
        console.log({ name, age, isStudent });
        alert(`Name: ${name}\nAge: ${age}\nStudent: ${isStudent}`);
    });

    document.getElementById('runAct3')?.addEventListener('click', () => {
        const a = 12;
        const b = 8;
        console.log('Sum:', a + b, 'Difference:', a - b, 'Product:', a * b, 'Quotient:', a / b);
        alert(`Sum: ${a + b}\nDifference: ${a - b}\nProduct: ${a * b}\nQuotient: ${a / b}`);
    });

    document.getElementById('runAct4')?.addEventListener('click', () => {
        const name = prompt('What is your name?');
        const favorite = prompt('What is your favorite number?');
        if (name && favorite) {
            alert(`Hello ${name}! Your favorite number is ${favorite}.`);
        }
    });

    document.getElementById('runAct5')?.addEventListener('click', () => {
        const age = parseInt(prompt('Enter your age:'));
        if (isNaN(age)) {
            alert('Please enter a valid age.');
            return;
        }
        alert(age >= 18 ? 'You are eligible.' : 'You are not eligible yet.');
    });

    document.getElementById('runAct6')?.addEventListener('click', () => {
        let up = '';
        for (let i = 1; i <= 5; i++) up += i + ' ';
        let down = '';
        let n = 5;
        while (n >= 1) {
            down += n + ' ';
            n--;
        }
        console.log('For loop:', up.trim(), '| While loop:', down.trim());
        alert(`Count up: ${up.trim()}\nCount down: ${down.trim()}`);
    });

    document.getElementById('runAct7')?.addEventListener('click', () => {
        console.log('Activity 7 button clicked!');
        alert('Button click logged to the console.');
    });

    /* Exercise 3 */
    document.getElementById('colorBtn')?.addEventListener('click', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r}, ${g}, ${b})`;

        document.body.classList.remove('light-mode');
        document.body.style.backgroundColor = color;
        document.querySelectorAll('.page-section, .hero').forEach((el) => {
            el.style.backgroundColor = color;
        });
    });

    document.getElementById('darkModeBtn')?.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');

        if (isLight) {
            document.body.style.backgroundColor = '';
            document.querySelectorAll('.page-section, .hero').forEach((el) => {
                el.style.backgroundColor = '';
            });
        } else {
            document.body.style.backgroundColor = '#0f172a';
            document.querySelectorAll('.page-section').forEach((el) => {
                el.style.backgroundColor = 'black';
            });
            const hero = document.querySelector('.hero');
            if (hero) hero.style.backgroundColor = 'black';
        }
    });

    document.getElementById('addItemBtn')?.addEventListener('click', () => {
        const list = document.getElementById('itemList');
        if (!list) return;
        const item = document.createElement('li');
        item.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(item);
    });

    document.getElementById('removeBtn')?.addEventListener('click', () => {
        document.getElementById('removeParagraph')?.remove();
    });

    document.getElementById('charInput')?.addEventListener('input', (e) => {
        const count = document.getElementById('charCount');
        if (count) count.textContent = `Characters: ${e.target.value.length}`;
    });

    document.getElementById('calculateBtn')?.addEventListener('click', () => {
        const n1 = parseFloat(document.getElementById('num1')?.value);
        const n2 = parseFloat(document.getElementById('num2')?.value);
        const result = document.getElementById('result');
        if (isNaN(n1) || isNaN(n2)) {
            alert('Enter two valid numbers.');
            return;
        }
        if (result) result.textContent = `Result: ${n1 + n2}`;
    });

    const dynamicImage = document.getElementById('dynamicImage');
    document.getElementById('changeImageBtn')?.addEventListener('click', () => {
        if (!dynamicImage) return;
        const currentSrc = dynamicImage.getAttribute('src') || '';
        const showingLike = !currentSrc.includes('/dislike');
        dynamicImage.src = showingLike ? '/assets/dislike.png' : '/assets/like.png';
        dynamicImage.alt = showingLike ? 'Dislike image' : '/assets/like.png';
    });

    document.getElementById('addTodoBtn')?.addEventListener('click', () => {
        const input = document.getElementById('todoInput');
        const list = document.getElementById('todoList');
        const text = input?.value.trim();
        if (!text || !list) return;

        const li = document.createElement('li');
        li.textContent = text + ' ';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'run-btn';
        deleteBtn.style.fontSize = '0.85rem';
        deleteBtn.style.padding = '0.3rem 0.8rem';
        deleteBtn.addEventListener('click', () => li.remove());

        li.appendChild(deleteBtn);
        list.appendChild(li);
        input.value = '';
    });

    /* Exercise 4 — Grade Calculator */
    const quizContainer = document.getElementById('quizContainer');
    const examContainer = document.getElementById('examContainer');
    const mcoContainer = document.getElementById('mcoContainer');

    const generateQuizBtn = document.getElementById('generateQuizBtn');
    const generateExamBtn = document.getElementById('generateExamBtn');
    const generateMcoBtn = document.getElementById('generateMcoBtn');
    const calcGradeBtn = document.getElementById('calcGradeBtn');
    const resetGradeBtn = document.getElementById('resetGradeBtn');

    function generateRows(container, count, label, scoreClass, totalClass) {
        if (!container) return;
        container.innerHTML = '';

        for (let i = 1; i <= count; i++) {
            const row = document.createElement('div');
            row.classList.add('grade-row');

            const score = document.createElement('input');
            score.type = 'number';
            score.placeholder = `${label} ${i} Score`;
            score.classList.add(scoreClass);

            const total = document.createElement('input');
            total.type = 'number';
            total.placeholder = 'Total';
            total.classList.add(totalClass);

            row.appendChild(score);
            row.appendChild(total);
            container.appendChild(row);
        }
    }

    function readCategory(scores, totals, label) {
        if (scores.length === 0) {
            alert(`Generate at least one ${label} item first.`);
            return null;
        }

        let sum = 0;

        for (let i = 0; i < scores.length; i++) {
            const S = parseFloat(scores[i].value);
            const T = parseFloat(totals[i].value);

            if (isNaN(S) || isNaN(T) || T === 0) {
                alert(`Fill all ${label} fields correctly.`);
                return null;
            }

            sum += (S / T) * 50 + 50;
        }

        return sum / scores.length;
    }

    generateQuizBtn?.addEventListener('click', () => {
        const count = parseInt(document.getElementById('quizCount')?.value);
        if (isNaN(count) || count <= 0) {
            alert('Enter a valid quiz count.');
            return;
        }
        generateRows(quizContainer, count, 'Quiz', 'quizScore', 'quizTotal');
    });

    generateExamBtn?.addEventListener('click', () => {
        const count = parseInt(document.getElementById('examCount')?.value);
        if (isNaN(count) || count <= 0) {
            alert('Enter a valid exam count.');
            return;
        }
        generateRows(examContainer, count, 'Exam', 'examScore', 'examTotal');
    });

    generateMcoBtn?.addEventListener('click', () => {
        const count = parseInt(document.getElementById('mcoCount')?.value);
        if (isNaN(count) || count <= 0) {
            alert('Enter a valid MCO count.');
            return;
        }
        generateRows(mcoContainer, count, 'MCO', 'mcoScore', 'mcoTotal');
    });

    calcGradeBtn?.addEventListener('click', () => {
        const quizAvg = readCategory(
            document.querySelectorAll('.quizScore'),
            document.querySelectorAll('.quizTotal'),
            'quiz'
        );
        const examAvg = readCategory(
            document.querySelectorAll('.examScore'),
            document.querySelectorAll('.examTotal'),
            'exam'
        );
        const mcoAvg = readCategory(
            document.querySelectorAll('.mcoScore'),
            document.querySelectorAll('.mcoTotal'),
            'MCO'
        );

        if (quizAvg === null || examAvg === null || mcoAvg === null) return;

        const finalGrade = quizAvg * 0.2 + examAvg * 0.3 + mcoAvg * 0.5;

        let equivalent;
        if (finalGrade >= 90) equivalent = 'A';
        else if (finalGrade >= 80) equivalent = 'B';
        else if (finalGrade >= 70) equivalent = 'C';
        else if (finalGrade >= 60) equivalent = 'D';
        else equivalent = 'F';

        const finalOut = document.getElementById('finalGradeOutput');
        const gradeOut = document.getElementById('gradeEquivalentOutput');
        if (finalOut) finalOut.textContent = `Final Grade : ${finalGrade.toFixed(2)}`;
        if (gradeOut) gradeOut.textContent = `Grade Equivalent : ${equivalent}`;
    });

    resetGradeBtn?.addEventListener('click', () => {
        if (quizContainer) quizContainer.innerHTML = '';
        if (examContainer) examContainer.innerHTML = '';
        if (mcoContainer) mcoContainer.innerHTML = '';

        const quizCount = document.getElementById('quizCount');
        const examCount = document.getElementById('examCount');
        const mcoCount = document.getElementById('mcoCount');
        if (quizCount) quizCount.value = '';
        if (examCount) examCount.value = '';
        if (mcoCount) mcoCount.value = '';

        const finalOut = document.getElementById('finalGradeOutput');
        const gradeOut = document.getElementById('gradeEquivalentOutput');
        if (finalOut) finalOut.textContent = 'Final Grade :';
        if (gradeOut) gradeOut.textContent = 'Grade Equivalent :';
    });
});

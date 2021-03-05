const correctAns = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // Check ans
    userAns.forEach((ans, index) =>{
        if(ans === correctAns[index]) {
            score += 25;
        }
    });

    //Show result on page
    scrollTo(0,0); //Scrolla para o topo da página 
    result.classList.remove('d-none'); //Tira a classe bootstrap d-none (display: none;)

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`; //Muda o texto dentro da span para o resultado da variavel score
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});


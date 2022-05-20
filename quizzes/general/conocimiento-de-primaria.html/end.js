const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const botonCertificado = document.getElementById('certificadoLink');
const intentaDenuevo = document.getElementById('intentaloDenuevo');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
// Codigo para verificacion de puntuacion minima
botonCertificado.style.display = 'none';
intentaDenuevo.style.display = 'none';

if (mostRecentScore >= 7) {
    botonCertificado.style.display = 'initial';
}
else {
    intentaDenuevo.style.display = 'initial';
}
// Codigo para verificacion de puntuacion minima

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('descubre-europa-con-luisillo.html');
};
const Haqqimizda = document.getElementById('Haqqimizda')
const Haqqimizda1 = document.getElementById('Haqqimizda1')
const KeçirilənTədbirlər = document.getElementById('KeçirilənTədbirlər')
const KeçirilənTədbirlər1 = document.getElementById('KeçirilənTədbirlər1')
const hub = document.getElementById('hub')
const Heyət = document.getElementById('Heyət')
const Heyət1 = document.getElementById('Heyət1')
const Fotoqalereya = document.getElementById('Fotoqalereya')
const Fotoqalereya1 = document.getElementById('Fotoqalereya1')
const Videoqalereya1 = document.getElementById('Videoqalereya1')
const Videoqalereya = document.getElementById('Videoqalereya')
const Xəbərlər1 = document.getElementById('Xəbərlər1')
const Xəbərlər = document.getElementById('Xəbərlər')

Haqqimizda.addEventListener('click', () =>{
    Haqqimizda1.style.display = 'block';
    KeçirilənTədbirlər1.style.display = 'none';
    hub.style.display = 'none';
    Heyət1.style.display = 'none';
    Fotoqalereya1.style.display = 'none';
    Videoqalereya1.style.display = 'none';
    Xəbərlər1.style.display = 'none';
});
KeçirilənTədbirlər.addEventListener('click', () => {
    Haqqimizda1.style.display = 'none';
    KeçirilənTədbirlər1.style.display = 'block';
    hub.style.display = 'none';
    Heyət1.style.display = 'none';
    Fotoqalereya1.style.display = 'none';
    Videoqalereya1.style.display = 'none';
    Xəbərlər1.style.display = 'none';
});
Heyət.addEventListener('click', () => {
    Haqqimizda1.style.display = 'none';
    KeçirilənTədbirlər1.style.display = 'none';
    hub.style.display = 'none';
    Heyət1.style.display = 'block';
    Fotoqalereya1.style.display = 'none';
    Videoqalereya1.style.display = 'none';
    Xəbərlər1.style.display = 'none';
});
Fotoqalereya.addEventListener('click', () => {
    Haqqimizda1.style.display = 'none';
    KeçirilənTədbirlər1.style.display = 'none';
    hub.style.display = 'none';
    Heyət1.style.display = 'none';
    Fotoqalereya1.style.display = 'block';
    Videoqalereya1.style.display = 'none';
    Xəbərlər1.style.display = 'none';
});
Videoqalereya.addEventListener('click', () => {
    Haqqimizda1.style.display = 'none';
    KeçirilənTədbirlər1.style.display = 'none';
    hub.style.display = 'none';
    Heyət1.style.display = 'none';
    Fotoqalereya1.style.display = 'none';
    Videoqalereya1.style.display = 'block';
    Xəbərlər1.style.display = 'none';
});
Xəbərlər.addEventListener('click', () => {
    Haqqimizda1.style.display = 'none';
    KeçirilənTədbirlər1.style.display = 'none';
    hub.style.display = 'none';
    Heyət1.style.display = 'none';
    Fotoqalereya1.style.display = 'none';
    Videoqalereya1.style.display = 'none';
    Xəbərlər1.style.display = 'block';
});
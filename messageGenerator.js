
const message = [
    'Wenn es heute regnet ist es morgen nass.',
    'Die Sonne scheint, wenn es nicht regnet.',
    'Kehre in dich und du wirst die Antwort finden.',
    'Wenn du nicht weißt, was du tun sollst, dann tu nichts.',
    'Wie wäre es sich einfach mal zu entspannen?',
    'Ein wenig Bildung schadet nie.',
    'Zu Coden macht Spass, aber nur wenn es funktioniert.',
]


const messageGenerator = () => {
    const index = Math.floor(Math.random() * message.length);
    return message[index];
}

console.log(messageGenerator());


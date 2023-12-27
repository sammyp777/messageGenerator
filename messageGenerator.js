

const messageComponents = {
    weather: ['regnet', 'sonnig', 'windig', 'bewölkt'],
    action: ['spazieren gehen', 'lesen', 'musizieren', 'kochen'],
    advice: ['Sei geduldig', 'Bleib positiv', 'Glaube an dich selbst', 'Lerne aus Fehlern'],
}

const getRandomComponent = (components) => {
    const index = Math.floor(Math.random() * components.length);
    return components[index];
}

const messageGenerator = () => {
    let generatedMessage = '';

    for (let component in messageComponents) {
        switch (component) {
            case 'weather':
                generatedMessage += `Wenn es heute ${getRandomComponent(messageComponents[component])} ist, `;
                break;
            case 'action':
                generatedMessage += `dann kannst du ${getRandomComponent(messageComponents[component])}. `;
                break;
            case 'advice':
                generatedMessage += `${getRandomComponent(messageComponents[component])}. `;
                break;
            default:
                break;
        }
    }


    return generatedMessage;
}

console.log(messageGenerator());


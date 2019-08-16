const sayHello = (greeting) => {
    const currentHour = new Date().getHours();
    let timeOfGreeting = 'Good morning!';

    if (currentHour >= 12 && currentHour <= 17) {
        timeOfGreeting = 'Good afternoon!';
    } else if (currentHour >= 17) {
        timeOfGreeting = 'Good evening!';
    }

    return `${timeOfGreeting} ${greeting}`;
}

export {sayHello};

'use strict';

console.log('App.js is running!');

var app = {
    title: 'Snapchat',
    subtitle: 'Snap',
    options: ['One', 'Two']

    // JSX -JavaScript XML
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? 'Here are your items' : 'No options',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' Item one '
        ),
        React.createElement(
            'li',
            null,
            ' Item two '
        )
    )
);

function getLocation(location) {
    if (location) return React.createElement(
        'p',
        null,
        'Location: ',
        location
    );
}

var user = {
    name: 'Nico',
    age: 18,
    location: 'San Francisco'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    (user.age && user.age) >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

console.log('App.js is running!');

var app = {
    title:'Snapchat',
    subtitle:'Snap', 
    options: ['One', 'Two']
}

// JSX -JavaScript XML
var template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ? 'Here are your items' : 'No options'}
    <ol>
        <li> Item one </li>
        <li> Item two </li>
    </ol>
    </div>
);

function getLocation(location) {
    if (location)
        return <p>Location: {location}</p>;
}

var user = {
    name: 'Nico', 
    age: 18,
    location: 'San Francisco'
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age) >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
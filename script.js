/* JS-ify this!!
<ul>
    <li><a href="#">home</a></li>
    <li><a href="#">about</a></li>
    <li><a href="#">projects</a></li>
    <li>
        <form>
            <input type="text" placeholder="username">
            <input type="password" placeholder="password">
            <input type="submit" value="go">
        </form>
    </li>
</ul>
*/

var body = document.body;

// li Elements
var ul = document.createElement('ul'),
    home = document.createElement('li'),
    about = document.createElement('li'),
    projects = document.createElement('li'),
    formLi = document.createElement('li'),
    form = document.createElement('form');

// Form Elements
    text = document.createElement('input');
      text.type = 'text';
      text.placeholder = 'username';
    pw = document.createElement('input');
      pw.type = 'password';
      pw.placeholder = 'password';
    submit = document.createElement('input');
      submit.type = 'submit';
      submit.value = 'go';

// 'a' tags for li's
    homeA = document.createElement('a');
      homeA.innerHTML = 'home';
      homeA.href = '#';
    aboutA = document.createElement('a');
      aboutA.innerHTML = 'about';
      aboutA.href = '#';
    projectsA = document.createElement('a');
      projectsA.innerHTML = 'projects';
      projectsA.href = '#';

// Append li's to ul
ul.append(home, about, projects, formLi);
// Append 'a' tags to li's
home.appendChild(homeA);
about.appendChild(aboutA);
projects.appendChild(projectsA);
// Append form to li
formLi.appendChild(form);
// Append form imputs to form
form.append(text, pw, submit);
// Append ul to nav
document.getElementById('navbar').append(ul);

console.log(body);

function requestMembers() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/orgs/learnFE/members', false); 
  req.send(null);
  if (req.status == 200) {
    return JSON.parse(req.responseText);
  };
};  

function renderMemberError() {
  document.write('Error getting members');
};

function renderMembers() {
  const allMembers = document.getElementById('all-members');
  const json = requestMembers();
  if (json) {
    json.map((member) => {
      let memberComponent = document.createElement('li');
      memberComponent.className = 'member';
      
      let avatar = document.createElement('img');
      avatar.setAttribute('src', member.avatar_url);
      memberComponent.appendChild(avatar);

      let username = document.createElement('span');
      username.innerText = member.login;
      memberComponent.appendChild(username);

      allMembers.appendChild(memberComponent);
    });
  } else {
    renderMemberError();
  }
}

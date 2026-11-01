const target = document.getElementById('target');

const ua = navigator.userAgent;
let browser = 'Unknown Browser';

if (ua.includes('Firefox/')) {
  const version = ua.split('Firefox/')[1].split('.')[0];
  browser = `Mozilla Firefox, ${version}`;
} else if (ua.includes('Edg/')) {
  const version = ua.split('Edg/')[1].split('.')[0];
  browser = `Microsoft Edge, ${version}`;
} else if (ua.includes('Chrome/')) {
  const version = ua.split('Chrome/')[1].split('.')[0];
  browser = `Google Chrome, ${version}`;
} else if (ua.includes('Safari/') && ua.includes('Version/')) {
  const version = ua.split('Version/')[1].split('.')[0];
  browser = `Apple Safari, ${version}`;
}

let os = 'Unknown OS';
if (ua.includes('Win')) os = 'Windows';
else if (ua.includes('Mac')) os = 'macOS';
else if (ua.includes('Linux')) os = 'Linux';
else if (ua.includes('Android')) os = 'Android';
else if (ua.includes('like Mac')) os = 'iOS';

const now = new Date();
const fiDate = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const fiTime = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

const html = `
  <p>${browser}</p>
  <p>${os}</p>
  <p>Screen width and height: ${screen.width} x ${screen.height}</p>
  <p>Available screen space: ${screen.availWidth} x ${screen.availHeight}</p>
  <p>${fiDate}</p>
  <p>${fiTime}</p>
`;

target.insertAdjacentHTML('beforeend', html);

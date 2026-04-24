import fs from 'fs';
import path from 'path';

const outDir = './src/pages';
const inDir = './html_backup';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// Map HTML file names to React component names
const pages = {
    'index.html': 'Home',
    'mision-vision.html': 'MisionVision',
    'principios.html': 'Principios',
    'historia.html': 'Historia',
    'equipo.html': 'Equipo',
    'preescolar.html': 'Preescolar',
    'primaria.html': 'Primaria',
    'secundaria.html': 'Secundaria',
    'media-tecnica.html': 'MediaTecnica',
    'proyectos.html': 'Proyectos',
    'calendario.html': 'Calendario',
    'noticias.html': 'Noticias',
    'contacto.html': 'Contacto',
    'admision.html': 'Admision'
};

const routePaths = {
    'index.html': '/',
    'mision-vision.html': '/mision-vision',
    'principios.html': '/principios',
    'historia.html': '/historia',
    'equipo.html': '/equipo',
    'preescolar.html': '/preescolar',
    'primaria.html': '/primaria',
    'secundaria.html': '/secundaria',
    'media-tecnica.html': '/media-tecnica',
    'proyectos.html': '/proyectos',
    'calendario.html': '/calendario',
    'noticias.html': '/noticias',
    'contacto.html': '/contacto',
    'admision.html': '/admision'
};

for (const [file, comp] of Object.entries(pages)) {
    const filePath = path.join(inDir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file}, not found`);
        continue;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract everything between </header> and <footer
    const headerEnd = content.indexOf('</header>');
    let footerStart = content.indexOf('<footer class="footer-edutech">');
    if (footerStart === -1) footerStart = content.indexOf('<footer>');

    if (headerEnd !== -1 && footerStart !== -1) {
        content = content.substring(headerEnd + 9, footerStart);
    } else {
        console.log(`Could not extract body for ${file}`);
        continue;
    }

    // Replace class= with className=
    content = content.replace(/class="/g, 'className="');
    
    // Replace <img ... > with <img ... />
    content = content.replace(/<img(.*?)([^\/])>/g, '<img$1$2 />');
    
    // Replace <input ...> with <input ... />
    content = content.replace(/<input(.*?)([^\/])>/g, '<input$1$2 />');

    // Replace <hr> or <hr ...> with <hr ... />
    content = content.replace(/<hr(.*?)([^\/])>/g, '<hr$1$2 />');
    
    // Replace <source ...> with <source ... />
    content = content.replace(/<source(.*?)([^\/])>/g, '<source$1$2 />');

    // Replace <br> with <br />
    content = content.replace(/<br>/g, '<br />');

    // inline styles replace style="..."
    // In React this should be style={{...}}, but the template might not have any inline styles. Let's see if there are any.
    // Generally the CSS has handled styles. We will just leave them or they might produce warnings.
    // If there is any style="background-image: url(...)" we must fix it because it crashes React string props.
    // We will just do a simple replace style="(.*?)" with style={{ "$1" }} -> actually, complex. Let's ignore it unless it crashes.
    
    // Replace href="abc.html" with to="/abc"
    for (const [f, route] of Object.entries(routePaths)) {
        content = content.replace(new RegExp(`href="${f}"`, 'g'), `to="${route}"`);
    }

    // replace <a to="..."> to <Link to="..."> and </a> to </Link>
    // This regex grabs <a ... to="..." ... > and inner text.
    const linkRegex = /<a([^>]*)to="([^"]+)"([^>]*)>(.*?)<\/a>/gs;
    content = content.replace(linkRegex, '<Link$1to="$2"$3>$4</Link>');
    
    // Also, some href="#" might remain. We will leave them since they aren't routes.

    // Also some nested a tags might not have matched correctly if they have sub-elements, but dotall (s) flag handles multiline inner text.
    
    // Replace any remaining <!-- --> comments, just in case they're malformed JSX comments
    content = content.replace(/<!--(.*?)-->/gs, '{/* $1 */}');

    const finalComponent = `import { Link } from 'react-router-dom';

const ${comp} = () => {
  return (
    <>
${content}
    </>
  );
};

export default ${comp};
`;

    fs.writeFileSync(path.join(outDir, `${comp}.jsx`), finalComponent, 'utf8');
    console.log(`Generated ${comp}.jsx`);
}

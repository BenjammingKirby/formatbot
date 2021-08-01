import test from 'ava';
import { CodeBlock, parseMessage } from './messageparser';
const input = `Hey guys! I really need help with my code. I don't know what's wrong with it:

\`\`\`js
const doCompany=async a=>{try{const r=(await 
axios.get(baseUrl+companyurl)).data.find(r=>r.name===a);
if(r)return r;{let r={name:a};if(201===(await axios.post
(baseUrl+companyurl,r)).status)return Logger.info(\`hey\`
),r}}catch(a){Logger.error(a)}};
\`\`\`
I also tried this:
\`\`\`js
if (r) return r;\`\`\`
Also my HTML is really messed up, idk what's up with it:
\`\`\`html
<div i="target"></div>
\`\`\`
\`\`\`css
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}\`\`\`
`;

test('Parses correctly', (t) => {
  const parsed = parseMessage(input);
  parsed.blocks.forEach((b: CodeBlock) => t.log(b.language));
  t.deepEqual(parsed, { blocks: [] });
});

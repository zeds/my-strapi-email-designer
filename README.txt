Part1: Send email from strapi
Part2: Use email designer template. ...coming soon!

📖1. Setup Strapi
npx create-strapi-app@latest my-strapi-email-designer --quickstart
cd my-strapi-email-designer

📖2. Run strapi
npm run develop

📖3. Register admin
npm run develop
password: Hogehoge39

📖4. Install sendinblue provider
⭕️npm install strapi-provider-email-sendinblue --save
❌npm install @yanotoma/strapi-provider-email-sendinblue --save

📖5. .env
SIB_API_KEY=

📖6. Create config/plugins.js

✅Strapi settingのemail pluginからテストメールを送信してみる。

📖7. Create new content-type
localhost:1337
SendEmail ※☑️ Draft & publishをハズす
name
from
to
title
body

📖8. Create lifecycles.js
api/send-email/content-type/send-email/

📖9. Test
Create new SendEmail entry.
Email is sent like a charm^^;

📖 おまけ
POSTMANからも送ってみる。



【 Resources 】
💡sendinblue
https://app.sendinblue.com/

💡sendinblue plugins
⭕️https://github.com/lith/strapi-provider-email-sendinblue
❌https://github.com/yanotoma/strapi-provider-email-sendinblue

💡Strapi
https://docs.strapi.io/

💡Strapi lifecycles hook
https://docs.strapi.io/dev-docs/plugins/email/#sending-emails-with-a-lifecycle-hook


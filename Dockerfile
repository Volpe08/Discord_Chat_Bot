FROM node:19.1.0-alpine
COPY . /
RUN npm install
RUN npm install discord.js
EXPOSE 3000
CMD ["node", "chat_bot.js"]


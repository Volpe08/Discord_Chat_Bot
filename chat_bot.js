import {Client, MessageCollector} from "discord.js"



const client = new Client({intents: ['Guilds', 'GuildMessages', "MessageContent"]});
const TOKEN = "MTA2MzQxMTkzNDg4MTM5ODg1NA.GrBG6P.fZFEH2UnTgW-91d_4erDXWkS-CxIslhEsT7JP0";
client.login(TOKEN);

client.on("ready", () => {
    console.log("Bot opérationnel");
});

client.on("messageCreate", message => {

    if (message.author.bot) return;
    //console.log(message.content)

    switch (message.content) {
        case "!ping":
            message.channel.send("Pong");
            break;
        case "!help":
            message.channel.send("Les commandes du bot sont : ```\n " +
                "!ping \n" +
                "!mention\n" +
                "!speak```");


            break;
        case "!mention":
            message.channel.send("Mention d'un utilisateur : <@" + message.author.id + ">");
            break;


    }
});


client.once("ready", () => {
    client.on("messageCreate", message => {

        if (message.author.bot) return;

        if (message.content.toLowerCase().includes('!speak')) {
            let filter = m => m.content.startsWith('!stop');

            message.channel.send("Vous pouvez parler avec moi jusqu'a ce que vous disiez ```bye```\n Je répondrais a toutes vos question en rapport avec paladium.\n" +
                "Les différentes question auquel je peut répondre pour le moment sont :" +
                "```- Vous en dire plus sur paladium\n" +
                "- Ce que vous pouvez faire sur paladium\n" +
                "- Avoir le discord de paladium\n" +
                "- Sur son créateur FuzeIII\n" +
                "- Avoir le site de paladium\n" +
                "- Qui a créer paladium\n" +
                "- Qui sont les admin de paladium\n" +
                "```");
            //var int = parseInt(message.content.toLowerCase().replace('!speak ', ''));
            let collector = message.channel.createMessageCollector(filter, {time: 99999999});

            collector.on('collect', message => {
                //console.log(`Collected ${message.content}`);
                //var reponse =
                if (message.author.bot) {
                    return;
                } else {
                    if (Reponse(message.content) === undefined) {

                    } else if (Reponse(message.content) === '!stop') {
                        message.channel.send("J'ai été très content de parler avec vous.\n" +
                            "Je vous souhaite une bonne journée et a bientot sur paldium ;)");
                        collector.stop();


                    } else {
                        //console.log(Reponse(message.content));
                        message.channel.send(Reponse(message.content));
                    }
                }
            });

            collector.on('end', collected => {
                //console.log(`Collected ${collected.size} items`);
            });

            setTimeout(() => {
                collector.stop();
            }, 99999999);
        }
        //console.log("Je suis ici2");
    })
    //console.log("Je suis ici3");
});


function Reponse(message) {
    let randomNumber = Math.random() * 10;

    const regexPaladium = /paladium|serveur|sur paladium/gi;
    const regexActivitePaladium = /faire sur paladium|faire paladium/gi
    const regexServer = /discord|admin|créer|site/gi;
    const regexFuze = /FuzeIII|Fuze/gi;
    const regexSalut = /Salut|hello|hi|bonjour|yo/gi;

    //console.log(message);

    if (message.toLowerCase() === 'bye') {
        return '!stop';
    }
    if(regexSalut.test(message)){
        //console.log(randomNumber);
        if(randomNumber < 2){
            randomNumber = null;

            return "Bonjour vous pouvez me poser toutes les question que vous voulez";
        }else if(randomNumber < 4){
            randomNumber = null;

            return 'Hello mon ami j\'espere que tu va bien, pour ma part oui, tu as des question sur paladium je crois';

        }else if(randomNumber < 6){
            randomNumber = null;

            return 'Hi my friends';
        }else if (randomNumber < 8){
            randomNumber = null;

            return 'Bien le bonjour mon cher ami que puis je faire pour vous ?';
        }else{
            randomNumber = null;

            return 'Yo dit moi tous tu as besoin de quoi sur paladium ?';
        }
    }
    if(regexFuze.test(message)){
        return "FuzeIII est un youtuber minecraft a plus de 2 million d'abonné qui a créer le serveur pvp faction " +
            "Paladium ainsi que modded";
    }
    if (regexPaladium.test(message)) {
        //console.log(regexPaladium.test(message));

        if (regexActivitePaladium.test(message)) {
            //console.log(randomNumber);
            if (randomNumber >= 5) {
                randomNumber = null;

                return ("Vous pouvez construire votre base, créer des item moddée en cas de soucis le staff" +
                    "de paladium est disponible sur son ts. Si vous souhaite y jouer vous pouvez me dire " +
                    "```Peut tu me passer le site de paladium``` et je vais vous envoyez leur site.");
            } else{
                return ("Les admins actuel de paladium sont Lorn87, FuzeIII et Goldorack. \n" +
                    "Il y avais aussi avant Terrainwatz mais il a préféré arrêter pour ce concentré sur sa vie privé");
            }
        } else if (regexServer.test(message)) {

            //console.log(randomNumber);
            if (randomNumber <= 2) {
                randomNumber = null;
                return ("J'aimerais bien vous envoyer le discord de paladium malheureusement ce dernier a subit quelque" +
                    "problème récement et a donc été suspendu le temps de la résolution de ce dernier\n" +
                    "Pour toutes question sur ce sujet je vous conseil d'aller sur le teamspeak de paladium" +
                    "```ts.paladium-pvp.fr```");
            } else if (randomNumber <= 4) {
                randomNumber = null;

                return ("Les admins actuel de" +
                    " paladium sont Lorn87, FuzeIII et Goldorack. \n" +
                    "Il y avais aussi avant Terrainwatz mais il a préféré arrêter pour ce concentré sur sa vie privé");
            } else if (randomNumber <= 6) {
                randomNumber = null;

                return ("La personne qui a créer paladium est FuzeIII");

            } else {
                return ("Voici pour vous le site de paladium" +
                    "```https://paladium-pvp.fr/```");
            }
        }else {
            return ('Le serveur paladium est un serveur Minecraft PVP faction créer par FuzeIII.  \n' +
                'Ce serveur est un serveur moddé sur le quel vous pouvez jouer avec vos amis si vous avez un compte' +
                'minecraft java edition.');
        }
    }else {
        return 'je n\'ai pas compris';
    }
}

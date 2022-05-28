import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/04529ffd0ceb587b9abf2.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `𝐍𝐨 𝐬𝐮𝐜𝐡 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 🤖𝐤𝐢𝐝 𝐡𝐚𝐯𝐞 𝐲𝐨𝐮 𝐞𝐯𝐞𝐫 𝐬𝐞𝐞𝐧 𝐬𝐨𝐦𝐞𝐨𝐧𝐞𝐬 𝐮𝐬𝐢𝐧𝐠 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 *${this.client.config.prefix}help*? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   

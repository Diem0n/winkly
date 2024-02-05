import requests 

webhook = 'https://discordapp.com/api/webhooks/1201434157054709760/IE3wssj2cABgX6ho7OllaejNfWJAi9fRro20eXHmAfc0Af6WHvhjq-GwN2mdwMByMFD7'
def sendMsg(msg):
    payload = {'content': msg}
    headers = {'Content-Type': 'application/json'}

    response = requests.post(webhook, json=payload, headers=headers)

    if response.status_code == 204:
        print('Message sent successfully!')
    else:
        print(f'Failed to send message. Status code {response.status_code}')


sendMsg('This is a msg being sent by webhooks to automate channel updates ')
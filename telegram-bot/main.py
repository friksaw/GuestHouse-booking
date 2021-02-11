import requests
import telebot
import json
import time


bot = telebot.TeleBot('')
url = "http://freakssha.ru/api/booking"
headers = {
    'Content-Type': "application/x-www-form-urlencoded",
    'cache-control': "no-cache"
    }
chat_id = 1165051058



def get_response():

        response = requests.request("GET", url, headers=headers)
        json_response = json.loads(response.content)
        booking_length = len(json_response['data']) - 1
        last_booking = json_response['data'][booking_length]

        return last_booking



def print_message(new_booking):
    bot.send_message(chat_id, 'Имя: {0} \n Телефон: {1} \n С {2} до {3}'.format(new_booking['name'],
                                                                                new_booking['phone'],
                                                                                new_booking['fromDate'],
                                                                                new_booking['toDate']))

def is_new_booking():
    global last_booking
    if last_booking != get_response():
        print_message(get_response())
        last_booking = get_response()

last_booking = get_response()
get_response()

try:
    while 1:
        is_new_booking()
        time.sleep(5)

    bot.polling()
except():
    time.sleep(60)

    while 1:
        is_new_booking()
        time.sleep(5)

    bot.polling()


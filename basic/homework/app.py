from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb://test:test@localhost', 27017)
# client = MongoClient('localhost', 27017)
db = client.dbsparta

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

## API 역할을 하는 부분
@app.route('/order', methods=['POST'])
def make_order():
    name_receive = request.form['name_give']
    num_receive = request.form['num_give']
    address_receive = request.form['address_give']
    phone_receive = request.form['phone_give']

    doc = {
        'name':name_receive,
        'num':num_receive,
        'address':address_receive,
        'phone':phone_receive
    }

    db.candle.insert_one(doc)

    return jsonify({'msg': '주문 완료!'})


@app.route('/order', methods=['GET'])
def show_orders():
    orders = list(db.candle.find({}, {'_id': False}))
    return jsonify({'all_orders': orders})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)